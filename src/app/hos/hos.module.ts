import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { SharedModule } from '../shared/shared.module';

import { HosRoutingModule } from './hos-routing.module';
import { HosComponent } from './hos.component';
import { StudentsComponent } from './students/students.component';
import { DocumentsComponent } from './documents/documents.component';
import { StaffsComponent } from './staffs/staffs.component';
import { HosService } from './hos.service';
import { ResourcesComponent } from './resources/resources.component';
import { FinancialsComponent } from './financials/financials.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyDatePickerModule,
    SharedModule,
    HosRoutingModule
  ],
  declarations: [
    HosComponent,
    StudentsComponent,
    DocumentsComponent,
    StaffsComponent,
    ResourcesComponent,
    FinancialsComponent
  ],
  providers: [
    HosService
  ]
})
export class HosModule { }
