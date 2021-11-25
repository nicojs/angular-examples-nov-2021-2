import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greet'
})
export class GreetPipe implements PipeTransform {
    transform(value: string | undefined): string {
        if(value) {
            return `Hey ${value}!`;
        }
        return '';
    }
}
