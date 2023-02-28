const express = require('express'); //requerir el modulo express
const mongoose = require("mongoose");
require("dotenv").config();

const app = express(); //ejrcutar express
const port = process.env.PORT || 9000;

// routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

//mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then (() => console.log("Conectado a MongoDB Atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));

