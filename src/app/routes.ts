import { Routes } from '@angular/router';
import { movieRoutes } from './movie/movie.routes';

export const routes: Routes = [
  {
    path: 'jedis',
    async loadChildren() {
      const { JediModule } = await import('./jedi/jedi.module');
      return JediModule;
    }
  },
  {
    path: 'movies',
    children: movieRoutes,
  },
  { path: '', pathMatch: 'full', redirectTo: 'jedis' },
];
