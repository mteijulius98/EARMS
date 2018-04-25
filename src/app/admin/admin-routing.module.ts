import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RegisterschoolComponent } from './registerschool/registerschool.component';
import { RegisterwardComponent } from './registerward/registerward.component';
import { RegisterdistrictComponent } from './registerdistrict/registerdistrict.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UsersComponent } from './users/users.component';
import { AddusersComponent } from './addusers/addusers.component';
import { AuthguardService } from '../shared/authguard.service';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthguardService],
    children: [
      {
        path: '',
        canActivateChild: [AuthguardService],
        children: [
          { path: 'users', component: UsersComponent },
          { path: 'addusers', component: AddusersComponent },
          { path: 'registerschool', component: RegisterschoolComponent },
          { path: 'registerward', component: RegisterwardComponent},
          { path: 'registerdistrict', component: RegisterdistrictComponent },
          { path: '', component: DashboardComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
