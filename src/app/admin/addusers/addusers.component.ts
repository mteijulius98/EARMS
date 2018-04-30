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
    
    this.loginService.addUsers(form.value.firstname,form.value.lastname,form.value.email,form.value.password,form.value.station_name,form.value.role)
    
    .subscribe(
      resp =>alert('Account created!!'),
      error=>alert('error')
    );
   form.reset();
  }
}
