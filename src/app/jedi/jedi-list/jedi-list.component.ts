import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Jedi } from 'src/app/models/jedi.model';

@Component({
  selector: 'sw-jedi-list',
  templateUrl: './jedi-list.component.html',
  styleUrls: ['./jedi-list.component.scss']
})
export class JediListComponent  {
  private jedisInEditMode = new Set();

  @Input()
  jedis: Jedi[] = [];

  constructor() { }

  setEditMode(jedi: Jedi) {
    this.jedisInEditMode.add(jedi);
  }
  isInEditMode(jedi: Jedi) {
    return this.jedisInEditMode.has(jedi);
  }
  removeEditMode(jedi: Jedi) {
    this.jedisInEditMode.delete(jedi);
  }

  delete(jedi: Jedi) {
    this.jedisInEditMode.delete(jedi);
    this.jedis.splice(this.jedis.indexOf(jedi), 1);
  }

  clearEdit() {
    this.jedisInEditMode.clear();
  }
}
