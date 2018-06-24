import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolreportsRoutingModule } from './schoolreports-routing.module';
import { SchoolreportsComponent } from './schoolreports.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AcademicsComponent } from './academics/academics.component';
import { FinancialComponent } from './financial/financial.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';

@NgModule({
  imports: [
    CommonModule,
    SchoolreportsRoutingModule
  ],
  declarations: [SchoolreportsComponent, StudentsComponent, TeachersComponent, AcademicsComponent, FinancialComponent, InfrastructureComponent]
})
export class SchoolreportsModule { }
