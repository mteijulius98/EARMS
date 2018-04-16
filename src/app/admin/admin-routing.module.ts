import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RegisterschoolComponent } from './registerschool/registerschool.component';
import { RegisterwardComponent } from './registerward/registerward.component';
import { RegisterdistrictComponent } from './registerdistrict/registerdistrict.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'admin', 
    component: AdminComponent,
    children: [
      {
        path:'registerschool',
        component:RegisterschoolComponent,
        outlet: 'admin'
      },
      {
        path:'registerward',
        component:RegisterwardComponent,
        outlet:'admin'
      },
      {
        path:'registerdistrict',
        component:RegisterdistrictComponent,
        outlet:'admin'
      },
      {
        path:'',
        component:DashboardComponent,
        outlet:'admin'
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
