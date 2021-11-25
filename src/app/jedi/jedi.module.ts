import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { JedisComponent } from './jedis.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MidichlorianPipe } from './pipes/midichlorian.pipe';
import { JediMasterPipe } from './pipes/jedi-master.pipe';
import { JediListComponent } from './jedi-list/jedi-list.component';
import { AddJediComponent } from './add-jedi/add-jedi.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { jediRoutes } from './jedi.routes';

@NgModule({
  declarations: [
    JedisComponent,
    MidichlorianPipe,
    JediMasterPipe,
    JediListComponent,
    AddJediComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild(jediRoutes),
  ],
  providers: [DecimalPipe],
  exports: [JedisComponent],
})
export class JediModule {}

