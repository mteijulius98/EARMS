import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolreportsComponent } from './schoolreports.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AcademicsComponent } from './academics/academics.component';
import { FinancialsComponent } from '../hos/financials/financials.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';

const routes: Routes = [
  {
    path: 'weo/reports/:schoolname',
    component: SchoolreportsComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component:StudentsComponent },
          { path: 'teachers', component: TeachersComponent },
          { path: 'academics', component: AcademicsComponent },
          { path: 'financial', component: FinancialsComponent },
          { path: 'infrastructure', component: InfrastructureComponent }

        ]
      }
    ]

  },
  {
    path: 'deo/reports/:wardname/:schoolname',
    component: SchoolreportsComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component:StudentsComponent },
          { path: 'teachers', component: TeachersComponent },
          { path: 'academics', component: AcademicsComponent },
          { path: 'financial', component: FinancialsComponent },
          { path: 'infrastructure', component: InfrastructureComponent }
        ]
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolreportsRoutingModule { }
