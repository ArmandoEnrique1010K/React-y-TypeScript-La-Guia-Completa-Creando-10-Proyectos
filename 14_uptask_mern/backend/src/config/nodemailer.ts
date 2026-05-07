import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Configuracion si se va a utilizar el sandbox de Mailtrap
// const config = () => {
//     return {
//         host: process.env.SMTP_HOST,
//         port: +process.env.SMTP_PORT,
//         auth: {
//             user: process.env.SMTP_USER,
//             pass: process.env.SMTP_PASS,
//         },
//     };
// };

// Configuracion si se va a utilizar gmail como receptor
const config = () => {
    return {
        // service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        family: 4, // fuerza IPv4
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        logger: true,
        debug: true,
    };
};

export const transporter = nodemailer.createTransport(config());
