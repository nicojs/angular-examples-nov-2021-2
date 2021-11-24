import { AfterViewInit, Component, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Jedi } from '../models/jedi.model';
import { JediListComponent } from './jedi-list/jedi-list.component';

@Component({
  selector: 'sw-jedis',
  templateUrl: 'jedis.component.html'
})
export class JedisComponent implements AfterViewInit, OnChanges {
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

  @ViewChild(JediListComponent)
  private jediList: JediListComponent | undefined;

  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.jediList)
  }

  updateKleur(event: Event) {
    this.kleur = (event.target as HTMLInputElement).value;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(Object.keys(changes));
  }

  updateCoordinates(event: Event) {
    const mouseEvent = event as MouseEvent;
    this.y = mouseEvent.y;
    this.x = mouseEvent.x;
  }

  stopEditing() {
    this.jediList?.clearEdit();
  }

}

