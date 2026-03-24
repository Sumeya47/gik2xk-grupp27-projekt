// Importera nödvändiga paket
var express = require('express');

var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

// Skapa en Express-applikation
var app = express();


// Tillåt anrop från andra ursprung (t.ex. frontend på annan port)
app.use(cors());

// Logga HTTP-anrop i terminalen
app.use(logger('dev'));

// Tillåt att ta emot JSON i request body
app.use(express.json());

// Tillåt att ta emot formulärdata i request body
app.use(express.urlencoded({ extended: false }));

// Hantera cookies
app.use(cookieParser());


// Koppla routes till sina respektive endpoints
app.use("/products", require ('./Server/routes/productRoutes'));
app.use("/users", require ('./Server/routes/userRoutes'));
app.use("/cart", require ('./Server/routes/cartRoutes')); 

// Exportera appen så att den kan användas av bin/www
module.exports = app;