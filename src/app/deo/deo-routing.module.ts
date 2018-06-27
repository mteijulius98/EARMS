import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeoComponent } from './deo.component';

import { DashboardComponent } from './dashboard.component';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
  {
    path:'deo',
    component:DeoComponent,
    // canActivate:[AuthguardService],
    children:[
      {
        path: '',
        // canActivateChild: [AuthguardService],
        children: [
          {path:'',component:DashboardComponent},
          {path:'reports',component:ReportsComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeoRoutingModule { }
