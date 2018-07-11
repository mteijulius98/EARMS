import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthguardService } from '../shared/authguard.service';
import { HosComponent } from './hos.component';
import { StaffsComponent } from './staffs/staffs.component';
import { StudentsComponent } from './students/students.component';
import { DocumentsComponent } from './documents/documents.component';
import { ResourcesComponent } from './resources/resources.component';
import { FinancialsComponent } from './financials/financials.component';

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
          { path: 'staffs', component: StaffsComponent },
          { path: 'resources', component: ResourcesComponent },
          { path: 'financials', component: FinancialsComponent },
          { path: 'documents', component: DocumentsComponent },
          { path: '', component: StudentsComponent}
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
