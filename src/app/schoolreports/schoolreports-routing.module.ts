import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolreportsComponent } from './schoolreports.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  {
    path: 'weo/reports/:schoolname',
    component: SchoolreportsComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'students', component:StudentsComponent },
          { path: 'teachers', component: TeachersComponent }

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
