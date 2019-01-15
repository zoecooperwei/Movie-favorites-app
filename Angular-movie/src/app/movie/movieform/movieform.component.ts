import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { charValidator } from "../../validators/charValidator";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movieform',
  templateUrl: './movieform.component.html',
  styleUrls: ['./movieform.component.css']
})
export class movieformComponent implements OnInit {

  private movie:Movie = new Movie(0, '', 0, '', 0, '');
  public saved:boolean = false;
  movieForm:FormGroup;
  movies=[];

  constructor(
    private movieservice:MovieService,
    private routeInfo:ActivatedRoute,
    private router:Router,
    private fb:FormBuilder
    ) { }

  ngOnInit() {
    // request and subscribe movies data from remote server
    let id = this.routeInfo.snapshot.params['id'];
    this.movieservice.getMovies().subscribe(data=>{
      this.movies = data;
    });

    // create movieForm
    this.movieForm = this.fb.group({
      movieName: ['', [Validators.required, Validators.minLength(4), charValidator('char', /^[a-zA-Z_+\s]+$/)]],
      movieYear: ['', Validators.required],
      movieDirector: ['', [Validators.required, charValidator('char', /^[a-zA-Z_+.\s]+$/)]],
      movieDesp: [''],
    })

    // request and update movie form by movie id
    this.movieservice.getMovie(id).subscribe(
      data => { 
        this.movie = data; 
        this.movieForm.reset(
          {
            movieName: data.name,
            movieYear:data.year,
            movieDirector: data.director,
            movieDesp: data.desp,
          }
        )
    });
  }
  
  // unsave movie info and leave current page
  cancel() {
    this.router.navigateByUrl("/movie");
  }

  // save movie info
  save() {
    this.saved = true;
    this.movie.name = this.movieForm.value.movieName;
    this.movie.year = this.movieForm.value.movieYear;
    this.movie.director = this.movieForm.value.movieDirector;
    this.movie.desp = this.movieForm.value.movieDesp;
    
    // save new movie info
    if(this.routeInfo.snapshot.params['id']==0){
      this.movieservice.addMovie(this.movie).subscribe(()=> {
        this.router.navigateByUrl("/movie");
      });
    } 
    // update movie info
    else {
      this.movieservice.updateMovie(this.movie, this.movie.id).subscribe(()=> {
        this.router.navigateByUrl("/movie");
      })
    }
    
    // this.movieForm.value.rating = this.movie.rating;
  }

// receive rating value from heart component and update it
  updateRating(newrating:number){
    this.movie.rating = newrating;
  }
}
