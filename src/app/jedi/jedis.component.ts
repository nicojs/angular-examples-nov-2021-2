import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Jedi } from '../models/jedi.model';
import { JediListComponent } from './jedi-list/jedi-list.component';
import { JediService } from './services/jedi.service';

@Component({
  selector: 'sw-jedis',
  templateUrl: 'jedis.component.html'
})
export class JedisComponent implements OnChanges, OnInit {
  public now = new Date();

  public title = 'world';
  public x = 0;
  public y = 0;

  public kleur = 'blue';

  constructor(private jediService: JediService){
    console.log('JedisComponent', jediService)
  }

  public allJedis: Jedi[] | undefined;

  ngOnInit() {
    this.jediService.getAll().then(jedis => {
      this.allJedis = jedis;
    });
  }

  @ViewChild(JediListComponent)
  private jediList: JediListComponent | undefined;

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

