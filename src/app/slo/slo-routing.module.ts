import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SloComponent } from './slo.component';
import { ReportsComponent } from './reports/reports.component';
import { WardslistComponent } from './reports/wardslist.component';
import { WardsComponent } from './reports/wards.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path:'deo',
    component:SloComponent,
    // canActivate:[AuthguardService],
    children:[
      {
        path: '',
        // canActivateChild: [AuthguardService],
        children: [         
          {path:'',component:ReportsComponent,
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
],
//canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SloRoutingModule { }
