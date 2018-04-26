import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeoComponent } from './weo.component';
import { AuthguardService } from '../shared/authguard.service';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path:'weo',
    component:WeoComponent,
    // canActivate:[AuthguardService],
    children:[
      {
        path: '',
        // canActivateChild: [AuthguardService],
        children: [
          {path:'',component:ReportsComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeoRoutingModule { }
