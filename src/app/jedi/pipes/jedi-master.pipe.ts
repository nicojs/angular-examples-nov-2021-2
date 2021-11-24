import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jediMaster'
})
export class JediMasterPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(jediName: string): string {
    console.log('Formatting jedi', jediName, 'in', this.locale);
    if (this.locale === 'nl-NL') {
      return `Meester ${jediName}`;
    } else {
      return `Master ${jediName}`;
    }
  }
}
