const express = require("express");
const bodyParser= require("body-parser");
const app = express();

const customer = require("./routes/route.js")




app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));



app.use("/" ,customer );


module.exports = app;