# Prueba técnica Backend Llatan

  - [Descripción](#descripción-de-la-prueba)
  - [Requerimientos mínimos](#requerimientos-mínimos)
  - [Instalar y Correr la aplicación](#instalar-y-correr-la-aplicación)
  - [Urls](#urls)

## Descripción de la prueba

Esta API guarda información personal de los clientes de Llatan. Ademas, calcula la edad promedio, la desviación estándar simple de todos los clientes y realiza una estimación de la fecha de defunción de los clientes de acuerdo con la esperanza de vida en Peru. Esta aplicación esta en producción en un servidor cloud de Heroku y se utilizaron las siguientes tecnologías: 

    - Node 16.13.2
    - Express 4.17.1
    - Sequelize (ORM)
    - PostgreSQL
    - fastest-validator (validaciones)

Documentación del proyecto en Swagger: `https://app.swaggerhub.com/apis-docs/ilidanrock/api-llatan_clientes/1.0.0#/`


## Requerimientos mínimos

Node 16.13.2

## Instalar y Correr la aplicación

Instalar API (backend):

1. En la carpeta `api` de la aplicación correr:
   `npm install`.

La aplicación está compuesta de un servidor Express utilizando la ORM Sequelize y la base de datos de PostgreSQL. 

Correr el API (backend):

2. En la carpeta `api` de la aplicación correr:
    `npm start`.

Esto levantara la aplicación en el puerto:

    URL base local : `http://localhost:3000/`

3. En la carpeta `api` debe crear el archivo .env para crear las variables de entorno de la aplicación:
   Ejemplo : 

    ![.env](/api/src/utils/env.png)

## Urls

1.- Local

- El servidor local se encuentra en:

  `http://localhost:3000/`

- (GET)La lista de los clientes con la fecha estimada de muerte de cada uno de ellos:
  `http://localhost:3000/listclientes`

- (GET)Promedio de edades y desviación estandar de edades de los clientes:

  `http://localhost:3000/kpideclientes`

- (POST)Guardar datos personales de los clientes:

  `http://localhost:3000/crearcliente`

2 .- Producción

- El servidor en producción se encuentra en:

  `https://llatanperu.herokuapp.com/`

- (GET)La lista de los clientes con la fecha estimada de muerte de cada uno de ellos:

  `https://llatanperu.herokuapp.com/listclientes`

- (GET)Promedio de edades y desviación estandar de edades de los clientes:

  `https://llatanperu.herokuapp.com/kpideclientes`

- (POST)Guardar datos personales de los clientes:

  `https://llatanperu.herokuapp.com/crearcliente`

.

