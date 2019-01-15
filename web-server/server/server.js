"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var app = express();
app.use('/', express.static(path.join(__dirname, '..', 'client/movieM')));
app.use(express.json());
// CORS configuration
app.use(function (req, res, next) {
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
});
app.get('/', function (req, res) {
    res.send('Welcome to TOP 20 movies');
});
app.get('/api/movies', function (req, res) {
    res.json(movies);
});
app.get('/api/movies/0', function (req, res) {
    var movie = new Movie(0, "", 0, "", 0, "");
    res.json(movie);
});
// get a movie with a given id in url
app.get('/api/movies/:id', function (req, res) {
    var m = movies.find(function (e) { return e.id == req.params.id; });
    if (!m) {
        res.status(404).send('Ooops! No film found');
        return;
    }
    res.json(m);
});
// get movie with a given name in url by using query; 
// app.get('/api/movies', (req, res) => {
//     // res.send(req.params);
//     let m = movies.find(e => e.id == req.query.id);
//     console.log(m);
//     // set http status as 404 if there is no movie with given id found in the array
//     res.json(m);
// })
// update a movie
app.put('/api/movies/:id', function (req, res) {
    var id = req.params.id;
    var movie = movies.filter(function (e) { return e.id == id; })[0];
    var index = movies.indexOf(movie);
    var keys = Object.keys(req.body);
    keys.forEach(function (key) {
        movie[key] = req.body[key];
    });
    movies[index] = movie;
    res.json(movies[index]);
});
// delete a movie
app["delete"]('/api/movies/:id', function (req, res) {
    var id = req.params.id;
    var movie = movies.filter(function (e) { return e.id == id; })[0];
    var index = movies.indexOf(movie);
    movies.splice(index, 1);
    res.json({ message: "User " + id + " deleted" });
});
// post a new movie
app.post('/api/movies', function (req, res) {
    var len = movies.length;
    var index = movies[len - 1].id;
    var newM = new Movie(index + 1, req.body.name, req.body.year, req.body.director, req.body.rating, req.body.desp);
    movies.push(newM);
    res.json(newM);
});
// create Movie class
var Movie = /** @class */ (function () {
    function Movie(id, name, year, director, rating, desp) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.director = director;
        this.rating = rating;
        this.desp = desp;
    }
    return Movie;
}());
exports.Movie = Movie;
var movies = [
    new Movie(1, "The Shawshank Redemption", 1994, 'Frank A. Darabont', 10, 'Fear Can Hold You Prisoner, Hope Can Set You Free'),
    new Movie(2, "Farewell My Concubine", 1993, 'Chen Kaige', 9, 'This is not simply a movie, it`s the LIFE'),
    new Movie(3, "Leon", 1994, 'Luc Besson', 9, 'Shape of my heart'),
    new Movie(4, "Forrest Gump", 1994, 'Robert Zemeckis', 9, 'Mama always said life was like a box of chocolates. You never know what you`re gonna get'),
    new Movie(5, "La vita e bella", 1997, 'Roberto Benigni', 10, 'Buongiorno, la mia principessa'),
    new Movie(6, "Titanic", 1997, 'James Cameron', 9, 'He saved me,in every way that a person can be saved'),
    new Movie(7, "Spirited Away", 2001, 'Hayao Miyazaki', 9, 'Always with me'),
    new Movie(8, "Schindler's List", 1993, 'Steven Spielberg', 10, 'Save the World'),
    new Movie(9, "Inception", 2010, 'Christopher Nolan', 9, 'You`re waiting for a train, a train that will take you far away. You know where you hope this train will take you, but you can`t be sure. But it doesn`t matter - because we`ll be together'),
];
app.listen(3001);
