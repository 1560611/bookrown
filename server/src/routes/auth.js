import express from 'express'
const Router = express.Router()
import User from './../data/models/user.model'
import ErrorHandle from './errorHandle'

Router
    .route('/login')
    .post(
        // async (req, res, next) => {
        //     try {
        //         let user = User.find()
        //         res.json(user)
        //     } catch (err) {
        //         // @ts-ignore
        //         req.errors = err
        //         next()
        //     }
        // },
        (req, res) => {
            res.status(404).json({
                errors: {
                    global:
                        "Invalid credentials"
                }
            })
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
