const express = require('express'); //requerir el modulo express
const app = express(); //ejrcutar express
const port = process.env.PORT || 9000;

// routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
    });

app.listen(port, () => console.log('server listening on port', port));

