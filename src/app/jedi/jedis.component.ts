import { Component } from '@angular/core';
import { Jedi } from '../models/jedi.model';

@Component({
  selector: 'sw-jedis',
  templateUrl: 'jedis.component.html'
})
export class JedisComponent {
  now = new Date();

  title = 'world';
  x = 0;
  y = 0;

  kleur = 'blue';

  allJedis: Jedi[] = [
    { name: 'Yoda', midichlorian: 17_700 },
    { name: 'Anakin', midichlorian: 27_700 },
    { name: 'Qui-Gon Jinn', midichlorian: 10_000 },
  ];

  updateKleur(event: Event) {
    this.kleur = (event.target as HTMLInputElement).value;
  }

  updateCoordinates(event: Event) {
    const mouseEvent = event as MouseEvent;
    this.y = mouseEvent.y;
    this.x = mouseEvent.x;
  }


}

