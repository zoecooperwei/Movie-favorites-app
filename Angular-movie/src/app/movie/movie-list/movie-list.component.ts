import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService, Movie } from '../movie.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class movieListComponent implements OnInit {

  private movies:Observable<Movie[]>;
  private newmovies =[];

  constructor(
    private router:Router,
    private movieservice: MovieService
    ) { }
 
  ngOnInit() {
    // request and subscribe movie data from remote server
      this.movies = this.movieservice.getMovies();
      this.movies.subscribe(data => {
        this.newmovies = data;
      });
  }

// search the movie name and navigate to the movie page
  filter(info:string){
    let filterS = this.newmovies.find(e => e.name.indexOf(info)!= -1);
    console.log(filterS);
    let id = filterS.id;
    this.router.navigateByUrl('/movie/'+id);
  }

// navigate to new movie page
  create() {
    this.router.navigateByUrl('/movie/0');
  }

// navigate to edit page
  edit(movie:Movie) {
    this.router.navigateByUrl('/movie/'+movie.id);
  }

// delete the movie
  delete(movie:Movie) {
    this.movieservice.deleteMovie(movie, movie.id).subscribe(() => {
      this.movies = this.movieservice.getMovies();
      this.movies.subscribe(data => {
        this.newmovies = data;
      });
    });
  }
}

