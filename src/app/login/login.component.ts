import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
//import { AuthService } from '../shared/auth.service';
import { LoginServiceService } from './login-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginServiceService,private router:Router,
     ) { }
  user={
	email:'',
	password:'',
}

private loginStatus:any;

  ngOnInit() {
    this.loginService.logout();
    //http call starts
   
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
}
