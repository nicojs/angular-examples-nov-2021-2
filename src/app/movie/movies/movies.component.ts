import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'sw-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] | undefined;

  constructor(private moviesService: MovieService) { }

  ngOnInit(): void {
    this.movies = this.moviesService.getAll();
  }

}
