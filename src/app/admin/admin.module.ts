import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
=======
>>>>>>> a97aaca81ca810afd754c912e936a879f4e795e0
import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RegisterschoolComponent } from './registerschool/registerschool.component';
import { RegisterwardComponent } from './registerward/registerward.component';
import { RegisterdistrictComponent } from './registerdistrict/registerdistrict.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AddusersComponent } from './addusers/addusers.component';


@NgModule({
  imports: [
    CommonModule,
<<<<<<< HEAD
    NgbModule,
    SharedModule,
    AdminRoutingModule    
=======
    AdminRoutingModule,
    SharedModule
>>>>>>> a97aaca81ca810afd754c912e936a879f4e795e0
  ],
  declarations: [
    AdminComponent,
    RegisterschoolComponent,
    RegisterwardComponent,
    RegisterdistrictComponent,
    DashboardComponent,
    UsersComponent,
    AddusersComponent
  ]
})
export class AdminModule { }
