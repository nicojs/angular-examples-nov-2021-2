import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttractDirective } from './attract/attract.directive';

@NgModule({
  declarations: [
    AttractDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AttractDirective
  ]
})
export class SharedModule { }
