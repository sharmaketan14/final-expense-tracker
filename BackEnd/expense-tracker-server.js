const express = require("express");
const mongodb = require('mongodb');
const app = express();
const db = require("./data/database.js");
const router = require('./routes/routes.js');
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : true }));

app.use('/', router);

app.use( (error, req, res, next) => {
    res.status(500);
    next();
})

db.connectToDatabase().then( () => {
    app.listen(5000);
}).catch( (err) => {
    console.log(err);
})