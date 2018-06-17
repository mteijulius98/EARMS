import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
//import { AuthService } from '../shared/auth.service';
import { LoginServiceService } from './login-service.service';
import { TimeService } from '../shared/time.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 currentYear:any;
  constructor(private loginService:LoginServiceService,private router:Router,
    private timeService:TimeService,private spinner:NgxSpinnerService ) { }
  user={
	email:'',
	password:'',
}

private loginStatus:any;

  ngOnInit() {
    this.loginService.logout();
    //http call starts
    this.currentYear = this.timeService.showCurrentYear();
  }
  onSignin(){
      this.spinner.show();
    this.loginService.signin(this.user.email, this.user.password)
    .subscribe(
        response => {
          this.spinner.hide();
            this.router.navigate([response.roinitial]);
            
        },
        error=>{
          this.spinner.hide();
            alert("sorry u failed to login")
            
    
          }
       
     
    );
   
  }
 
}
