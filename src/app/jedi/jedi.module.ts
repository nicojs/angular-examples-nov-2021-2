import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { JedisComponent } from './jedis.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MidichlorianPipe } from './pipes/midichlorian.pipe';
import { JediMasterPipe } from './pipes/jedi-master.pipe';
import { JediListComponent } from './jedi-list/jedi-list.component';
import { AddJediComponent } from './add-jedi/add-jedi.component';

@NgModule({
  declarations: [
    JedisComponent,
    MidichlorianPipe,
    JediMasterPipe,
    JediListComponent,
    AddJediComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [DecimalPipe],
  exports: [JedisComponent],
})
export class JediModule {}
