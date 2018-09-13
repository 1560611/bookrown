// Express
const express = require('express')
const app = express()

// Dotenv
require('dotenv').config()

// Body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Database
const mongoose = require('mongoose')
mongoose.connect(process.env.MLAB_URL, { useNewUrlParser: true })
    .then(() => console.log("DB is connected"))
    .catch((err) => console.log(`DB has errors: \n ${err}`))

// PORT
const PORT = process.env.PORT || 5000

// Use Routes
app.use('/api/auth', require('./routes/auth'))

// Launch server
app.listen(PORT, (err) => {
    if (err) {
        throw err
    }

    console.log(`Server is running on PORT: ${PORT}`)
})