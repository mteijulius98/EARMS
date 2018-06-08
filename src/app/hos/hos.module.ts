import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { HosRoutingModule } from './hos-routing.module';
import { HosComponent } from './hos.component';
import { StudentsComponent } from './students/students.component';
import { DocumentsComponent } from './documents/documents.component';
import { SchoolstaffsComponent } from './schoolstaffs/schoolstaffs.component';
import { ReportsComponent } from './reports/reports.component';
import { HosService } from './hos.service';
import { SchoolresourcesComponent } from './schoolresources/schoolresources.component';
import { FinancialsComponent } from './financials/financials.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HosRoutingModule
  ],
  declarations: [
    HosComponent,
    StudentsComponent,
    DocumentsComponent,
    SchoolstaffsComponent,
    ReportsComponent,
    SchoolresourcesComponent,
    FinancialsComponent
  ],
  providers: [
    HosService
  ]
})
export class HosModule { }
