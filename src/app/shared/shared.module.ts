import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AuthguardService }            from './authguard.service';
import { AuthService }          from './auth.service';
import { HeaderbrandComponent } from './header/headerbrand.component';
@NgModule({
  imports: [
    CommonModule
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
    AuthService,
    AuthguardService
  ]
})
export class SharedModule { }
