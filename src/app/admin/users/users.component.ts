import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { IUsers } from './users';
import { LoginServiceService } from '../../login/login-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUsers[];
  errorMessage:string;
  roles=[];
 public constructor(private adminService:AdminService,private loginService:LoginServiceService) { }
 
ngOnInit(){
  this.adminService.viewRoles().subscribe(
    role =>{
    this.roles=role.roles
    console.log('our',role)
    //(districts:ourDistrict[]) => this.districts= districts,
    },
    error => this.errorMessage = <any>error);
  // this.adminService.viewUsers().subscribe(
  //     users => this.users = users,
      
  //     error => this.errorMessage = <any>error);
      
  
} 
// ond(form:any){
    
//   this.loginService.addUsers(form.value.firstname,form.value.middlename,form.value.lastname,form.value.email,form.value.password,form.value.district,form.value.role,form.value.school,form.value.ward)
  
//   .subscribe(
//     resp =>alert('Account created!!'),
//     error=>alert('error')
//   );
//  form.reset();
// }
form4(form:any){
    
  this.adminService.registerRole(form.value.role_name,form.value.role_initial)
  
  .subscribe(
    resp =>alert('Role created!!'),
    error=>alert('error')
  );
 form.reset();
}

}
