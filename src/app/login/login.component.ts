import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
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
    private timeService:TimeService ) { }
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
      
    this.loginService.signin(this.user.email, this.user.password)
    .subscribe(
        response => {
            this.router.navigate([response.role_id]);
            
        },
        error=>{
            alert("sorry u failed to login")
            
    
          }
       
     
    );
   
  }
  getYear() {
    
  }
}
