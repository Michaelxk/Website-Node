// importar express 
const express = require('express');
const path = require('path');
const routes = require('./routes');

//configurar express
const app = express();

// Habilitar pug

app.set('view engine', 'pug');

// A;adir las vistas
app.set('views', path.join(__dirname, './views'));

// cargar una carpeta estatica llamada public
app.use(express.static('public'));

// cargar rutas
app.use('/', routes());

app.listen(3001);
