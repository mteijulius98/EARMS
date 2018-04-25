import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RegisterschoolComponent } from './registerschool/registerschool.component';
import { RegisterwardComponent } from './registerward/registerward.component';
import { RegisterdistrictComponent } from './registerdistrict/registerdistrict.component';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import { UsersComponent } from './users/users.component';
import { AddusersComponent } from './addusers/addusers.component';
import { AuthguardService } from '../shared/authguard.service';
=======
import { AuthguardService } from '../shared/authguard.service';
import { UsersComponent } from './users/users.component';
import { AddusersComponent } from './addusers/addusers.component';
>>>>>>> a97aaca81ca810afd754c912e936a879f4e795e0

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
