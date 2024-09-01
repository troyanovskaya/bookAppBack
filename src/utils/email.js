const nodemailer = require('nodemailer');
const username = 'anastasiiatroianovska@gmail.com';
const password = 'hrmwwfbsrgdlcedg';
const host = 'sandbox.smtp.mailtrap.io';
const port = 25;

const sendEmail = async (options) =>{
    const transporter = nodemailer.createTransport(
    {
        service: 'Gmail',
        host: host,
        port,
        auth: {
            user: username,
            pass:password
        }
    })
    const emailOptions = {
        from: 'BookNook support<support@booknook.com',
        to: options.email,
        subject: options.subject,
        text: options.message
    }
    await transporter.sendMail(emailOptions);

}
module.exports = sendEmail
