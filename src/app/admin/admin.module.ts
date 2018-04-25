import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
        NgbModule,
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
    ]
})
export class AdminModule { }
