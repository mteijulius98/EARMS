import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../login/login-service.service';
import { IUsers } from '../../admin/users/users';
import { AdminService } from '../../admin/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  errorMessage:string;
  stationName:string="";
  //private userData:any=JSON.parse(localStorage.getItem('UserData'));
 // private station_name:string=this.userData["station_name"];
  
  constructor(private adminService:AdminService) { }

  ngOnInit() {
   
    this.adminService.viewUsers().subscribe(
      users =>{
        
        console.log( localStorage.getItem('station_name'))
        console.log(users.users)
        for (let index = 0; index < users.users.length; index++) {
          console.log(users.users[index].email)
          if (users.users[index].email == localStorage.getItem('station_name')) {
            this.stationName=users.users[index].station_name
            console.log(this.stationName)
          }
          
        }
     } ,
      
      error => this.errorMessage = <any>error);
      
      
  }
 

  

}
