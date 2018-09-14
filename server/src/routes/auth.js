import express from 'express'
const Router = express.Router()
import User from './../data/models/user.model'
import ErrorHandle from './errorHandle'
import parseErrors from './../utils/parseErrors'

Router
    .route('/login')
    .post(
        async (req, res, next) => {
            const { email, password } = req.body
            let user = await User.findOne({ email })
            if (user && user.isValidPassword(password)) {
                res.json({
                    user: user.toAuthJSON()
                    // user: "here"
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
                const result = await user.save()
                res.json({
                    user: user.toAuthJSON()
                    // user: "here"
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

// module.exports = Router
export default Router
