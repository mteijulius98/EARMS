import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RegisterschoolComponent } from './registerschool/registerschool.component';
import { RegisterstationsComponent } from './registerstations/registerstations.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
        children: [
      {
        path: '',
        children: [
          { path: '', component: UsersComponent },
          { path: 'registerschool', component: RegisterschoolComponent },
          { path: 'registerstations', component: RegisterstationsComponent },
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
export class AdminRoutingModule { }
