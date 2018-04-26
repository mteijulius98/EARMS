import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SloComponent } from './slo.component';
import { AuthguardService } from '../shared/authguard.service';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path:'slo',
    component:SloComponent,
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
export class SloRoutingModule { }
