import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { movieListComponent } from './movie/movie-list/movie-list.component';
import { Code404Component } from './code404/code404.component';
import { HomeComponent } from './home/home.component';
import { movieformComponent } from './movie/movieform/movieform.component';
import { ConfirmGuard } from './guard/confirm.guard';

// routes configuration
export const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'movie', component: movieListComponent},
  {path: 'movie/:id', component: movieformComponent, canDeactivate:[ConfirmGuard]},
  {path: '**', component: Code404Component}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
