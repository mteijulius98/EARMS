import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RegisterschoolComponent } from './registerschool/registerschool.component';
import { RegisterstationsComponent } from './registerstations/registerstations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardService } from '../shared/authguard.service';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
        children: [
      {
        path: '',
        children: [
          { path: 'users', component: UsersComponent },
          { path: 'registerschool', component: RegisterschoolComponent },
          { path: 'registerdistrict', component: RegisterstationsComponent },
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
