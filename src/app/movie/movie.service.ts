import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  getAll(): Movie[] {
    return [
      { id: 0, title: 'A new hope' },
      { id: 1, title: 'The empire strikes back' },
      { id: 2, title: 'Return of the Jedi' },
    ];
  }

  async get(id: number) {
    return this.getAll().find((movie) => movie.id === id);
  }
}
