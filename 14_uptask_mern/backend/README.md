# API REST del gestor de tareas con Nodejs, TypeScript, Express, MongoDB, Mongoose, Express Validator, JWT, Cookies y Resend

Autor: Juan Pablo De La Torre

Última actualización: Mayo del 2026

[Proyecto desplegado en Render (Debe mostrar un "Internal Server Error" en la vista del usuario)
](https://mern-uptask-backend-ea73.onrender.com/)

## Variables de entorno

`DATABASE_URL` = Se requiere una URL de conexión del sistema de gestión de bases de datos MongoDB. (ej: mongodb+srv://usuario:password@cluster.mongodb.net/database)

`FRONTEND_URL` = Se requiere la URL del dominio de la aplicación web (frontend) para que no haya un problema de CORS en el frontend.

`JWT_SECRET` = Cadena de texto secreta utilizada para firmar y verificar los tokens JWT de autenticación. Debe contener caracteres aleatorios y seguros para evitar la falsificación de tokens por parte de terceros.

`RESEND_API_KEY` = Clave privada proporcionada por Resend que permite autenticar la aplicación con la API de envío de correos electrónicos. Es necesaria para poder enviar emails desde el backend.

`RESEND_EMAIL_FROM` = Dirección de correo electrónico verificada en Resend que se utilizará como remitente de los correos enviados por la aplicación. (ej: onboarding@resend.dev o no-reply@tudominio.com)

## Cambios realizados

- Se reemplazó Nodemailer por el servicio de correo transaccional Resend, ya que Nodemailer depende de configuraciones SMTP que suelen presentar limitaciones o bloqueos en entornos de producción y despliegues gratuitos. Con Resend, el envío de correos es más confiable, moderno y sencillo de integrar.

- La autenticación fue mejorada utilizando cookies HTTP en lugar de devolver el token JWT directamente en la respuesta de la API. Esto permite almacenar el token de manera más segura en el navegador y reduce la exposición del JWT en el cliente.

- Se implementó autenticación basada en JWT almacenado en cookies para mantener la sesión del usuario de forma persistente y segura.
