const express = require('express');
const path = require('path');

//Initializations

const app = express();

//Settings

app.set("port", process.env.PORT || 3000)
app.set("views", path.join(__dirname,"..", "client", "src", "view"))

//Middlewares

app.use(express.urlencoded({extended: false}));

//Routes

app.use(require('./routes/index.routes'));


module.exports = app;