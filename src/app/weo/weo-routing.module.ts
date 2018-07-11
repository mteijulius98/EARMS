import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeoComponent } from './weo.component';
import { DashboardComponent} from './dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path:'weo',
    component:WeoComponent,
    
    children:[
      {
        path: '',
        
        children: [
          {path:'',component:DashboardComponent},
          {path:'reports',component:ReportsComponent}
          
        ]
      }
    ],
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeoRoutingModule { }
