const express = require('express');

const app = express();

const port = process.env.PORT || 3000

// database 
let movies = [
    {
        id: 1,
        title: "El padrino"
    },
    {
        id: 2,
        title: "Spiderman"
    },
    {
        id: 3,
        title: "Soy leyenda"
    },
    {
        id: 4,
        title: "El ultimo samurai"
    },

];

app.listen(port, () => console.log("Server is running on port " + port))