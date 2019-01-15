import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { movieListComponent } from './movie/movie-list/movie-list.component';
import { HeartComponent } from './heart/heart.component';
import { Code404Component } from './code404/code404.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app--routing.module';
import { movieformComponent } from './movie/movieform/movieform.component';
import { MovieService } from './movie/movie.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    movieListComponent,
    HeartComponent,
    Code404Component,
    HomeComponent,
    movieformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
