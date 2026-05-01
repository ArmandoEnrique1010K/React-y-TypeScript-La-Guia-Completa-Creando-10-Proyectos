# Buscador de recetas con React, TypeScript, React Router, Axios, Zod, Zustand y OpenRouter

Autor: Juan Pablo De La Torre

## Variables de entorno

- `VITE_OPENROUTER_KEY` = Se requiere un API KEY para que funcione la IA generativa integrada de Open Router.

## Advertencia

- Accede a [configuracion de privacidad](https://openrouter.ai/settings/privacy) y activa las siguientes opciones: **Paid endpoints that may train on request data** y **Free endpoints that may train on request data**. Por otro lado desactiva la opción **Always enforce ZDR**, Si no realizas esta configuración, es posible que la API no encuentre modelos disponibles y genere errores como: "No endpoints available matching your guardrail restrictions"

- Los modelos más estables no son gratuitos. Se recomienda añadir al menos $5 USD (~ S/20 PEN) de saldo a tu cuenta, puedes verificar tu consumo [aqui](https://openrouter.ai/activity). Si no tienes saldo o excedes el límite, puedes recibir errores como: "429 Too Many Requests" o similares relacionados a modelos no disponibles o limitados.

- Los modelos con sufijo ":free" pueden presentar alta latencia, límites estrictos o indisponibilidad debido a la saturación, por lo que no son confiables para uso continuo. Además, su disponibilidad no está garantizada, un modelo gratuito puede pasar a ser de pago o dejar de estar disponible sin previo aviso. Se recomienda utilizarlos solo para pruebas y evitar depender de ellos en entornos de producción.
