import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'midichlorian',
})
export class MidichlorianPipe implements PipeTransform {
  constructor(private numberPipe: DecimalPipe) {}

  transform(midichlorianCount: number, formatting?: string): string {
    const formattedMc = this.numberPipe.transform(midichlorianCount);
    if (formatting === 'long') {
      return `${formattedMc} midichlorian`;
    }
    return `${formattedMc} mc`;
  }
}
