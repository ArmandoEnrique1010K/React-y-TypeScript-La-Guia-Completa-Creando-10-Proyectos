# Aplicación del gestor de proyectos con React, TypeScript, React Router, Axios, HeadlessUI, React Hook Form, TanStack Query y Zod

Autor: Juan Pablo De La Torre

Última actualización: Mayo del 2026

[Proyecto desplegado en Vercel](https://mern-uptask-juan-pablo-de-la-torre.vercel.app/)

## Variables de entorno

`VITE_API_URL` = Se requiere la URL del dominio del backend para que se pueda hacer peticiones al servidor (debe terminar en sufijo "/api").

## Cambios realizados

- Se implementó un diseño responsive para dispositivos móviles, para evitar desbordamientos horizontales y se ha corregido los problemas de overflow horizontal en pantallas pequeñas, mejorando la adaptación del contenido.

- Se agregó una configuración adicional para la libreria de `dnd-kit` con el objetivo de mejorar la compatibilidad del sistema de arrastre en dispositivos táctiles. Debido a una limitación conocida de `dnd-kit` en dispositivos móviles, la funcionalidad de arrastrar tareas puede presentar comportamientos inconsistentes dependiendo del navegador y del dispositivo utilizado.
