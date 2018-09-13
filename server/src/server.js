// Express
// const express = require('express')
import express from 'express'
const app = express()

// Dotenv
require('dotenv').config()
import 'dotenv'

// Body parser
// const bodyParser = require('body-parser')
import bodyParser from 'body-parser'
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Database
// const mongoose = require('mongoose')
import mongoose from 'mongoose'
mongoose.connect(process.env.MLAB_URL, { useNewUrlParser: true })
    .then(() => console.log("DB is connected"))
    .catch((err) => console.log(`DB has errors: \n ${err}`))

// PORT
const PORT = process.env.PORT || 5000

// Use Routes
// const path = require('path')
import path from 'path'
import AuthRoute from './routes/auth'
app.use('/api/auth', AuthRoute)

app.use('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

// Launch server
app.listen(PORT, (err) => {
    if (err) {
        throw err
    }

    console.log(`Server is running on PORT: ${PORT}`)
})
