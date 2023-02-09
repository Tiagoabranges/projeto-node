// src/app.js
const express = require('express');

const app = express();

app.use(express.json());
/* Dentro do app.use(), passamos uma função é ela que habilita a possibilidade de recebermos
 dados pelo corpo (body) de nossa requisição. 😉 */
module.exports = app;