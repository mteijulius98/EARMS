import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { HosRoutingModule } from './hos-routing.module';
import { HosComponent } from './hos.component';
import { UpdaterecordsComponent } from './updaterecords/updaterecords.component';
import { DocumentsComponent } from './documents/documents.component';
import { SchooldetailsComponent } from './schooldetails/schooldetails.component';
import { ReportsComponent } from './reports/reports.component';
import { HeadService } from './head.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HosRoutingModule
  ],
  declarations: [
    HosComponent,
    UpdaterecordsComponent,
    DocumentsComponent,
    SchooldetailsComponent,
    ReportsComponent
  ],
  providers: [
    HeadService
  ]
})
export class HosModule { }
