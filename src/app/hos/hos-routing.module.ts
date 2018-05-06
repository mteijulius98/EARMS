import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthguardService } from '../shared/authguard.service';
import { HosComponent } from './hos.component';
import { SchooldetailsComponent } from './schooldetails/schooldetails.component';
import { UpdaterecordsComponent } from './updaterecords/updaterecords.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
  {
    path: 'hos',
    component: HosComponent,
    // canActivate: [AuthguardService],
    children: [
      {
        path: '',
        // canActivateChild: [AuthguardService],
        children: [
          { path: 'updaterecords', component: UpdaterecordsComponent },
          { path: 'documents', component: DocumentsComponent },
          { path: '', component: SchooldetailsComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HosRoutingModule { }
