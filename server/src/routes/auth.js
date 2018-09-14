import express from 'express'
const Router = express.Router()
import User from './../data/models/user.model'
import ErrorHandle from './errorHandle'
import parseErrors from './../utils/parseErrors'
import sendConfirmationEmail from './../mailer/mailer'

Router
    .route('/login')
    .post(
        async (req, res, next) => {
            const { email, password } = req.body
            let user = await User.findOne({ email })
            if (user && user.isValidPassword(password)) {
                res.json({
                    user: user.toAuthJSON()
                })
            } else {
                res.status(404).json({
                    errors: {
                        global: "Invalid"
                    }
                })
            }
        },
        ErrorHandle
    )

Router
    .route('/signup')
    .post(
        async (req, res, next) => {
            try {
                const { email, password } = req.body
                const user = new User({ email })
                user.setPassword(password)
                user.setConfirmationToken()
                const result = await user.save()
                sendConfirmationEmail(result)
                res.json({
                    user: result.toAuthJSON()
                })
            } catch (err) {
                // @ts-ignore
                res.status(404).json({
                    errors: parseErrors(err.errors)
                })
            }
        },
        ErrorHandle
    )

Router
    .route('/confirmation')
    .post(
        async (req, res) => {
            const token = req.body
            let user = await User.findOneAndUpdate(
                { confirmationToken: token },
                { confirmationToken: "", confirmed: true },
                { new: true }
            )
            user ? res.json({ user: user.toAuthJSON() })
                :
                res.status(404).json({})
        }
    )

// module.exports = Router
export default Router
