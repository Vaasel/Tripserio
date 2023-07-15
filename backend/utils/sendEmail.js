const nodemailer = require("nodemailer");
const ErrorHandler = require("./ErrorHandler");

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({

        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD
        }
    })

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message
    }
    try {
        await transporter.sendMail(mailOptions)
    } catch (error) {
        return new ErrorHandler(error.message, 500)
    }
}

module.exports = sendEmail;