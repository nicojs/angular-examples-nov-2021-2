import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'sw-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {

    console.log('Test')
  }

  movie: Movie | undefined;

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params) => +params.id),
        switchMap((id) => this.movieService.get(id))
      )
      .subscribe((movie) => {
        console.log(movie);
        this.movie = movie;
      });
  }

  previousMovie() {
    if (this.movie) {
      this.router.navigate(['movies', this.movie.id - 1]);
    }
  }
  nextMovie() {
    if (this.movie) {
      this.router.navigate(['movies', this.movie.id + 1]);
    }
  }
}
