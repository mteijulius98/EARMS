import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

import { WeoRoutingModule } from './weo-routing.module';
import { WeoComponent } from './weo.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    WeoRoutingModule
  ],
  declarations: [WeoComponent, ReportsComponent]
})
export class WeoModule { }
