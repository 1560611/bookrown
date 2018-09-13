const Router = require('express').Router()
const User = require('./../data/models/user.model')
const ErrorHandle = require('./errorHandle')

Router
    .route('/login')
    .post(
        async (req, res, next) => {
            try {
                let user = User.find()
                res.json(user)
            } catch (err) {
                // @ts-ignore
                req.errors = err
                next()
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

module.exports = Router