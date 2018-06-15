import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeaderbrandComponent } from './header/headerbrand.component';
import { ToggleService } from './toggle.service';
import { TimeService } from './time.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    HeaderbrandComponent
  ],
  exports: [
    HeaderComponent,
    HeaderbrandComponent
  ],
  providers: [
    ToggleService,
    TimeService
  ]
})
export class SharedModule { }
