import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

import { HosRoutingModule } from './hos-routing.module';
import { HosComponent } from './hos.component';
import { AddrecordsComponent } from './addrecords/addrecords.component';
import { UpdaterecordsComponent } from './updaterecords/updaterecords.component';
import { DocumentsComponent } from './documents/documents.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    HosRoutingModule
  ],
  declarations: [
    HosComponent,
    AddrecordsComponent,
    UpdaterecordsComponent,
    DocumentsComponent
  ]
})
export class HosModule { }
