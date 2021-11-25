import { Routes } from '@angular/router';
import { jediRoutes } from './jedi/jedi.routes';
import { movieRoutes } from './movie/movie.routes';

export const routes: Routes = [
  {
    path: 'jedis',
    children: jediRoutes,
  },
  {
    path: 'movies',
    children: movieRoutes,
  },
  { path: '', pathMatch: 'full', redirectTo: 'jedis' },
];
