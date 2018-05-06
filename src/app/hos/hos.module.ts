import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { HosRoutingModule } from './hos-routing.module';
import { HosComponent } from './hos.component';
import { UpdaterecordsComponent } from './updaterecords/updaterecords.component';
import { DocumentsComponent } from './documents/documents.component';
import { SchooldetailsComponent } from './schooldetails/schooldetails.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    SharedModule,
    HosRoutingModule
  ],
  declarations: [
    HosComponent,
    UpdaterecordsComponent,
    DocumentsComponent,
    SchooldetailsComponent
  ]
})
export class HosModule { }
