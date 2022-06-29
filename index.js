const express = require('express');

const app = express();

const port = process.env.PORT || 3000

// middleware
app.use(express.json())

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

// routes
app.get('/movies', (req, res) =>
{
    return res.status(200).json(movies);
});

//create film
app.post('/movies', (req, res) => {

    const newFilm = {
        id: req.body.id,
        title: req.body.title
    };

    movies.push(newFilm);

    return res.status(200).send('Create film');
});

app.listen(port, () => console.log("Server is running on port " + port))