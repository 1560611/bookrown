import express from 'express'
const Router = express.Router()
import User from './../data/models/user.model'
import ErrorHandle from './errorHandle'

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
    .route('/')
    .get(
        async (req, res, next) => {
            try {
                let user = await User.find()
                res.json(user)
            } catch (err) {
                // @ts-ignore
                req.errors = err
                next()
            }
        },
        ErrorHandle
    )

// module.exports = Router
export default Router
