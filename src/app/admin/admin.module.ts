import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RegisterschoolComponent } from './registerschool/registerschool.component';
import { RegisterwardComponent } from './registerward/registerward.component';
import { RegisterdistrictComponent } from './registerdistrict/registerdistrict.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AddusersComponent } from './addusers/addusers.component';
import { AdminService } from './admin.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        AdminRoutingModule,
        SharedModule
    ],
    declarations: [
        AdminComponent,
        RegisterschoolComponent,
        RegisterwardComponent,
        RegisterdistrictComponent,
        DashboardComponent,
        UsersComponent,
        AddusersComponent
    ],
    providers: [
        AdminService
      ]
})
export class AdminModule { }
