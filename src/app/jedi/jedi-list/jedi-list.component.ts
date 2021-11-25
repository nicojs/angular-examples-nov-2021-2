import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { auditTime, debounce, debounceTime, tap } from 'rxjs';
import { Jedi } from 'src/app/models/jedi.model';

@Component({
  selector: 'sw-jedi-list',
  templateUrl: './jedi-list.component.html',
  styleUrls: ['./jedi-list.component.scss']
})
export class JediListComponent implements OnInit, OnChanges {
  private jedisInEditMode = new Set();

  public searchForm = new FormGroup({
    search: new FormControl('')
  })

  @Input()
  jedi: Jedi[] | undefined;

  filteredJedis: Jedi[] | undefined;

  currentFilter = '';

  constructor() { }

  ngOnInit(){
    this.searchForm.valueChanges.pipe(
      auditTime(1000)
    ).subscribe(value => {
      this.currentFilter = value.search;
      this.updateFilteredJedis();
    });
  }

  private updateFilteredJedis() {
    console.log('filtering');
    this.filteredJedis = this.jedi?.filter(jedi => jedi.name.includes(this.currentFilter));
  }

  ngOnChanges(changes: SimpleChanges){
    if('jedi' in changes) {
      this.updateFilteredJedis();
    }
  }

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
    this.jedi?.splice(this.jedi.indexOf(jedi), 1);
  }

  clearEdit() {
    this.jedisInEditMode.clear();
  }
}
