import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MyDatePickerModule } from 'mydatepicker';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RegisterschoolComponent } from './registerschool/registerschool.component';
import { RegisterstationsComponent } from './registerstations/registerstations.component';
import { UsersComponent } from './users/users.component';
import { AdminService } from './admin.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DataTablesModule,
        MyDatePickerModule,
        AdminRoutingModule,
        SharedModule
    ],
    declarations: [
        AdminComponent,
        RegisterschoolComponent,
        RegisterstationsComponent,
        UsersComponent,
    ],
    providers: [
        AdminService
      ]
})
export class AdminModule { }
