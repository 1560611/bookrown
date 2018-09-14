const mongoose = require('mongoose')
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        index: true
    },
    passwordHash: {
        type: String,
        required: true
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
        token: this.generateJWT()
    }
}

export default mongoose.model('users', UserSchema)
