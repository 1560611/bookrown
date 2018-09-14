const mongoose = require('mongoose')
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import uniqueValidator from 'mongoose-unique-validator'

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        index: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    confirmed: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    }
)

UserSchema.methods.isValidPassword = function isValidPassword(password) {
    return bcrypt.compareSync(password, this.passwordHash)
}
UserSchema.methods.generateJWT = function generateJWT() {
    return jwt.sign({
        email: this.email
    },
        process.env.JWT_SECRET
    )
}
UserSchema.methods.toAuthJSON = function toAuthJSON() {
    return {
        email: this.email,
        token: this.generateJWT(),
        confirmed: this.confirmed
    }
}
UserSchema.methods.setPassword = function setPassword(password) {
    this.passwordHash = bcrypt.hashSync(password, 10)
}
UserSchema.plugin(uniqueValidator, { message: "This email is already taken" })

export default mongoose.model('users', UserSchema)
