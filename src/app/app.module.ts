import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import localeNL from '@angular/common/locales/nl';
import { JediModule } from './jedi/jedi.module';

registerLocaleData(localeNL);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, JediModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-NL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
