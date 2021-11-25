import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MoviesComponent, MovieDetailsComponent],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [MoviesComponent],
})
export class MovieModule {}
