// @ts-nocheck
import nodemailer from 'nodemailer'

const from = '"Bookworm" <test@subject>'

const setup = () => {
    return nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST,
        port: process.env.MAILTRAP_PORT,
        auth: {
            user: process.env.MAILTRAP_USER,
            pass: process.env.MAILTRAP_PASS
        }
    })
}

export default (user) => {
    const transport = setup()
    const email = {
        from,
        to: user.email,
        subject: "Welcome to Bookworm",
        text:
            `
            Welcome to Bookworm. Please, confirm your email.

            ${user.generateConfirmationURL()}
        `
    }

    transport.sendMail(email)
}