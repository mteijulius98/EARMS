import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeoComponent } from './deo.component';

import { DashboardComponent } from './dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { WardslistComponent } from './reports/wardslist.component';
import { WardsComponent } from './reports/wards.component';

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
          {path:'reports',component:ReportsComponent,
          children:[
            {
              path: '',
              // canActivateChild: [AuthguardService],
              children: [
                {path:'', component:WardslistComponent},
                {path:'wardname', component:WardsComponent}
              ]
        }
        ]
      }
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
