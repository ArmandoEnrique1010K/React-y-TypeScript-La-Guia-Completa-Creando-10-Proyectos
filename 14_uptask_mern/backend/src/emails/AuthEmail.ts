// import { transporter } from "../config/nodemailer";
import { resend } from "../config/resend";

interface IEmail {
    email: string;
    name: string;
    token: string;
}

export class AuthEmail {
    static sendPasswordResetToken = async (user: IEmail) => {
        try {
            const response = await resend.emails.send({
                from: `"Uptask" <${process.env.RESEND_EMAIL_FROM}>`,
                to: user.email,
                subject: "UpTask - Reestablece tu password",

                html: `
                    <p>Hola: ${user.name}, has solicitado reestablecer tu password.</p>

                    <p>Visita el siguiente enlace:</p>

                    <a href="${process.env.FRONTEND_URL}/auth/new-password">
                        Reestablecer Password
                    </a>

                    <p>E ingresa el código: <b>${user.token}</b></p>

                    <p>Este token expira en 10 minutos</p>
                `,
            });

            console.log(response);
            return response;
        } catch (error) {
            console.error(error);
        }
    };

    static sendConfirmationEmail = async (user: IEmail) => {
        try {
            const response = await resend.emails.send({
                from: `"Uptask" <${process.env.EMAIL_USER}>`,
                to: user.email,
                subject: "UpTask - Confirma tu cuenta",
                html: `<p>Hola: ${user.name}, has creado tu cuenta en UpTask, ya casi esta todo listo, solo debes confirmar tu cuenta</p>
     
                <p>Visita el siguiente enlace:</p>
     
                <a href="${process.env.FRONTEND_URL}/auth/confirm-account">Confirmar cuenta</a>
     
                <p>E ingresa el código: <b>${user.token}</b></p>
     
                <p>Este token expira en 10 minutos</p>
            `,
            });
            console.log(response);
            console.log("Mensaje enviado", response.data.id);
            return response;
        } catch (error) {
            console.error("Error real:", error);
        }
    };
}

// export class AuthEmail {
//     static sendConfirmationEmail = async (user: IEmail) => {
//         try {
//             const info = await transporter.sendMail({
//                 from: `"Uptask" <${process.env.EMAIL_USER}>`,
//                 to: user.email,
//                 subject: "UpTask - Confirma tu cuenta",
//                 text: "UpTask - Confirma tu cuenta",
//                 html: `
//         <p>Hola: ${user.name}, has creado tu cuenta en UpTask, ya casi esta todo listo, solo debes confirmar tu cuenta</p>
//         <p>Visita el siguiente enlace:</p>
//         <a href="${process.env.FRONTEND_URL}/auth/confirm-account">Confirmar cuenta</a>
//         <p>E ingresa el código: <b>${user.token}</b></p>
//         <p>Este token expira en 10 minutos</p>
//       `,
//             });
//             console.log(info);
//             console.log("Mensaje enviado", info.messageId);
//         } catch (error) {
//             console.error("Error real:", error);
//         }
//     };

//     static sendPasswordResetToken = async (user: IEmail) => {
//         try {
//             // await transporter.verify();
//             // console.log("SMTP READY");
//             console.log("ANTES DE SENDMAIL");

//             const info = await transporter.sendMail({
//                 from: `"Uptask" <${process.env.EMAIL_USER}>`,
//                 to: user.email,
//                 subject: "UpTask - Reestablece tu password",
//                 text: "UpTask - Reestablece tu password",
//                 html: `
//         <p>Hola: ${user.name}, has solicitado reestablecer tu password.</p>
//         <p>Visita el siguiente enlace:</p>
//         <a href="${process.env.FRONTEND_URL}/auth/new-password">Reestablecer Password</a>
//         <p>E ingresa el código: <b>${user.token}</b></p>
//         <p>Este token expira en 10 minutos</p>
//       `,
//             });
//             console.log("DESPUES DE SENDMAIL");

//             console.log(info);
//             console.log("Mensaje enviado", info.messageId);
//         } catch (error) {
//             console.error(error);
//         }
//     };
// }
