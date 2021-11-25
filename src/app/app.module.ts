import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import localeNL from '@angular/common/locales/nl';
import { JediModule } from './jedi/jedi.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthTokenInterceptor } from './shared/auth.interceptor';
import { MovieModule } from './movie/movie.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { MenuComponent } from './menu/menu.component';

registerLocaleData(localeNL);

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [BrowserModule, JediModule, MovieModule, RouterModule.forRoot(routes)],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'nl-NL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
