import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MovieService {

  constructor(private http:HttpClient) {}

  // get movies data
  getMovies():Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:3001/api/movies');
  }

  // get the movie data with given id
  getMovie(id:number):Observable<Movie> {
    let movie = this.http.get<Movie>('http://localhost:3001/api/movies/'+id);
    return movie;
  }

  // add movie data
  addMovie(movie:Movie) {
    return this.http.post('http://localhost:3001/api/movies', movie);
  }

  // update movie data
  updateMovie(movie:Movie, id:number) {
    return this.http.put('http://localhost:3001/api/movies/'+id, movie);
  }

  // delete movie data
  deleteMovie(movie:Movie, id:number) {
    return this.http.delete('http://localhost:3001/api/movies/'+id);
  }
}

// create class movie
export class Movie {
  constructor(
    public id:number,
    public name:string,
    public year:number,
    public director:string,
    public rating:number,
    public desp:string
  ) {
  }
}
