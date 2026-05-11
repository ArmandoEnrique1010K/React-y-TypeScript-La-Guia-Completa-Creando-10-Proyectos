# Quiosco con Nextjs, PostgreSQL, Prisma, Next Cloudinary, Zustand y Zod

Autor: Juan Pablo De La Torre

Última actualización: Mayo del 2026

Proyecto desplegado en Vercel, contiene 3 vistas:

[Menú del quiosco](https://quiosco-next-juan-pablo-de-la-torre.vercel.app/order/cafe)
[Panel de administrador](https://quiosco-next-juan-pablo-de-la-torre.vercel.app/admin/orders)
[Ordenes a entregar](https://quiosco-next-juan-pablo-de-la-torre.vercel.app/orders)

## Variables de entorno

`DATABASE_URL` = Se requiere una URL de conexión del sistema de gestión de bases de datos PostgreSQL. (ej: postgresql://usuario:password@localhost:5433/database)

`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`= Nombre del cloud asignado por Cloudinary para almacenar y gestionar imágenes.

`NEXT_PUBLIC_CLOUDINARY_API_KEY`= API Key pública proporcionada por Cloudinary para identificar la cuenta utilizada en la aplicación.

`CLOUDINARY_API_SECRET`= Clave privada utilizada para autenticar operaciones seguras con la API de Cloudinary.

**Nota**: Las 3 variables de entorno relacionadas con Cloudinary deben mantener exactamente esos nombres, ya que son utilizadas internamente por Next Cloudinary según su documentación oficial.

## Cambios realizados

- Actualización de Prisma ORM de la versión 6 a la versión 7, incluyendo cambios importantes en la configuración del cliente Prisma y en la integración con PostgreSQL.

- Actualización de Next.js 14 a Next.js 16, adaptando la estructura del proyecto a los nuevos cambios y mejoras introducidos en el framework.

- Implementación de almacenamiento de imágenes utilizando Cloudinary mediante carpetas organizadas para una mejor gestión de recursos multimedia.

## Advertencia

- Para ejecutar el proyecto en modo desarrollo debes ejecutar los siguientes comandos en consola:
    1. Instalar dependencias: `npm install`
    2. Generar el cliente de Prisma: `npx prisma generate`
    3. Ejecutar migraciones de Prisma: `npx prisma migrate dev`
    4. Ejecutar el seed de Prisma para insertar datos iniciales en la base de datos: `npx prisma db seed`
    5. Ejecutar el servidor de desarrollo: `npm run dev`

- Si la base de datos está vacía y no ejecutas el seed de Prisma, la aplicación no mostrará productos ni categorías en el quiosco.

- Ejecuta el comando `npx next build` crear la versión de producción de la aplicación, no inicia el servidor ni abre la app, pero sirve para detectar errores antes del deploy, para ejecutar la app compilada en modo de producción ejecuta `npx next start`.
