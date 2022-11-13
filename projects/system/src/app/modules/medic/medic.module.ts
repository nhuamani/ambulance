import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './interfaces/views/form/form.component';
import { ListComponent } from './interfaces/views/list/list.component';

@NgModule({
  declarations: [
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormComponent,
    ListComponent
  ]
})
export class MedicModule { }
