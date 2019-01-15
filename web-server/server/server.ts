import * as express from 'express';
import * as path from 'path';

const app = express();

app.use('/', express.static(path.join(__dirname, '..', 'client/movieM')));
app.use(express.json());

// CORS configuration
app.use((req, res, next) => {
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to TOP 20 movies');
})

app.get('/api/movies', (req, res) => {
    res.json(movies);
})

app.get('/api/movies/0', (req, res) => {
    let movie = new Movie(0, "", 0, "", 0, "")
    res.json(movie);
})

// get a movie with a given id in url
app.get('/api/movies/:id', (req, res) => {
    const m = movies.find(e => e.id == req.params.id);
   
    if(!m) {
        res.status(404).send('Ooops! No film found');
        return;
    }
    res.json(m);
})

// update a movie
app.put('/api/movies/:id', (req, res) => {
    const id = req.params.id;
    let movie = movies.filter(e => e.id == id)[0];
    const index = movies.indexOf(movie);
    const keys = Object.keys(req.body);

    keys.forEach(key => {
        movie[key] = req.body[key];
    });

    movies[index] = movie;
    res.json(movies[index]);
})

// delete a movie
app.delete('/api/movies/:id', (req, res) => {
    const id = req.params.id;

    let movie = movies.filter(e => e.id == id)[0];

    const index = movies.indexOf(movie);
    
    movies.splice(index, 1);
    res.json({message: `User ${id} deleted`});
})

// post a new movie
app.post('/api/movies', (req, res) => {
    let len = movies.length;
    let index = movies[len-1].id;
    const newM = new Movie (index + 1, req.body.name, req.body.year, 
        req.body.director, req.body.rating, req.body.desp);

    movies.push(newM);
    res.json(newM);
})

// create Movie class
export class Movie {
    [key:string]:any;
    constructor(public id:number, 
        public name:string, 
        public year: number,
        public director:string,
        public rating:number, 
        public desp:string) {}
}

const movies:Movie[] = [
    new Movie(1, "The Shawshank Redemption", 1994, 'Frank A. Darabont', 10, 
    'Fear Can Hold You Prisoner, Hope Can Set You Free'),
    new Movie(2, "Farewell My Concubine", 1993, 'Chen Kaige', 9, 
    'This is not simply a movie, it`s the LIFE'),
    new Movie(3, "Leon", 1994, 'Luc Besson', 9, 
    'Shape of my heart'),
    new Movie(4, "Forrest Gump", 1994, 'Robert Zemeckis', 9, 
    'Mama always said life was like a box of chocolates. You never know what you`re gonna get'),
    new Movie(5, "La vita e bella", 1997, 'Roberto Benigni', 10, 
    'Buongiorno, la mia principessa'), 
    new Movie(6, "Titanic", 1997, 'James Cameron', 9, 
    'He saved me,in every way that a person can be saved'),
    new Movie(7, "Spirited Away", 2001, 'Hayao Miyazaki', 9, 'Always with me'),
    new Movie(8, "Schindler's List", 1993, 'Steven Spielberg', 10, 
    'Save the World'),
    new Movie(9, "Inception", 2010, 'Christopher Nolan', 9, 
    'You`re waiting for a train, a train that will take you far away. You know where you hope this train will take you, but you can`t be sure. But it doesn`t matter - because we`ll be together'),
];

app.listen(3001);