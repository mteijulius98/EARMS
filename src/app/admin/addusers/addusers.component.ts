import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../login/login-service.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {

  constructor(private loginService:LoginServiceService) {  }

  ngOnInit() {
  }
  ond(form:any){
    
    this.loginService.addUsers(form.value.firstname,form.value.middlename,form.value.lastname,form.value.email,form.value.password,form.value.district,form.value.role,form.value.school,form.value.ward)
    
    .subscribe(
      resp =>alert('Account created!!'),
      error=>alert('error')
    );
   form.reset();
  }
}
