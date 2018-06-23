import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeoComponent } from './weo.component';
import { AuthguardService } from '../shared/authguard.service';
import { DashboardComponent} from './dashboard.component';
import { ReportsComponent } from './reports/reports.component';
//import { SchoolreportsComponent } from './reports/schoolreports/schoolreports.component';

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
export class WeoRoutingModule { }
