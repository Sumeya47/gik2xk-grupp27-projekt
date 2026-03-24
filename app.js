var express = require('express');

var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');


var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/products", require ('./Server/routes/productRoutes'));
app.use("/users", require ('./Server/routes/userRoutes'));
app.use("/cart", require ('./Server/routes/cartRoutes')); 



module.exports = app;