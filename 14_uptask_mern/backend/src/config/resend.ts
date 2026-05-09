// import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { Resend } from "resend";

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
// const config = () => {
//     return {
//         // service: "gmail",
//         host: "smtp.gmail.com",
//         port: 465,
//         secure: true,
//         // family: 4, // fuerza IPv4
//         auth: {
//             user: process.env.SMTP_USER,
//             pass: process.env.SMTP_PASS,
//         },
//         logger: true,
//         debug: true,
//     };
// };

// export const transporter = nodemailer.createTransport(config());

export const resend = new Resend(process.env.RESEND_API_KEY);
