import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Jedi } from 'src/app/models/jedi.model';

@Component({
  selector: 'sw-add-jedi',
  templateUrl: './add-jedi.component.html',
  styleUrls: ['./add-jedi.component.scss']
})
export class AddJediComponent{

  @Output()
  public jediAdd = new EventEmitter<Jedi>();

  createJediForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    midichlorian: new FormControl(0, [
      Validators.max(30000),
      Validators.min(0),
    ]),
  });

  createJedi() {
    if (this.createJediForm.valid) {
      this.jediAdd.emit(this.createJediForm.value);
      this.createJediForm.reset();
    } else {
      console.log('INVALID');
    }
  }
}
