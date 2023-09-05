const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const sendEmail = ({ firstName, lastName, email, mobileNumber, msg } ) => {
    if (!firstName || !lastName || !email || !msg) {
         throw new Error('undefiend value')
    }

    const mail = {
        to:'ashutoshsaha299@gmail.com',
        from:email,
        subject:`${firstName} ${lastName} is trying to contact you `,
        text:`Name: ${firstName} ${lastName}, Number: ${mobileNumber}, email: ${email},  Message: ${msg}`,
    }
    transporter.sendMail(mail, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent', info.messageId, info.response);
    })
}


module.exports = {
    sendEmail
}