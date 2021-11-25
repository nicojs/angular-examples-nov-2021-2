import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';

export const movieRoutes: Routes = [
  { path: '', pathMatch: 'full', component: MoviesComponent },
  { path: ':id', component: MovieDetailsComponent },
];
