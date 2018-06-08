import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthguardService } from '../shared/authguard.service';
import { HosComponent } from './hos.component';
import { SchoolstaffsComponent } from './schoolstaffs/schoolstaffs.component';
import { StudentsComponent } from './students/students.component';
import { DocumentsComponent } from './documents/documents.component';
import { ReportsComponent } from './reports/reports.component';
import { ResourcesComponent } from './resources/resources.component';

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
          { path: 'students', component: StudentsComponent },
          { path: 'resources', component: ResourcesComponent },
          { path: 'reports', component: ReportsComponent },
          { path: 'documents', component: DocumentsComponent },
          { path: '', component: SchoolstaffsComponent}
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
