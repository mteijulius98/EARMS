import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderbrandComponent } from './header/headerbrand.component';
import { ToggleService } from './toggle.service';
import { RouterModule } from '@angular/router';
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
    ToggleService
  ]
})
export class SharedModule { }
