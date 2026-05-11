# Aplicación de un CRUD de productos con React, TypeScript, React Router, Axios y Valibot (incluye Loader y Actions de React Router)

Autor: Juan Pablo De La Torre

Última actualización: Mayo del 2026

[Proyecto desplegado en Vercel](https://frontend-administrador-productos-iota.vercel.app/)

## Variables de Entorno

`VITE_API_URL` = Se requiere la URL del dominio del backend para que se pueda hacer peticiones al servidor (debe terminar en sufijo "/api").

## Cambios realizados

- Se implementó un diseño responsive para dispositivos móviles, para evitar desbordamientos horizontales y se ha corregido los problemas de overflow horizontal en pantallas pequeñas, mejorando la adaptación del contenido.

- En lugar de desplegar la base de datos en Render, se ha optado por Neon.

## Advertencia

- El servicio gratuito de PostgreSQL en Render presenta limitaciones importantes: las bases de datos gratuitas tienen una duración de 1 mes y luego de ese tiempo sera eliminado. Para proyectos personales, pruebas o despliegues de portafolio, se recomienda utilizar alternativas como Neon, ya que ofrece un plan gratuito más estable y orientado a PostgreSQL serverless.
