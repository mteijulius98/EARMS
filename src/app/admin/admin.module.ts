import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RegisterschoolComponent } from './registerschool/registerschool.component';
import { RegisterwardComponent } from './registerward/registerward.component';
import { RegisterdistrictComponent } from './registerdistrict/registerdistrict.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    AdminComponent,
    RegisterschoolComponent,
    RegisterwardComponent,
    RegisterdistrictComponent,
    DashboardComponent
  ]
})
export class AdminModule { }
