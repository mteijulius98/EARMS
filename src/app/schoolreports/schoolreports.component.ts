import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schoolreports',
  templateUrl: './schoolreports.component.html',
  styleUrls: ['./schoolreports.component.css']
})
export class SchoolreportsComponent implements OnInit {
  stationName:string="";
  errorMessage:string;
  constructor(private adminService:AdminService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.adminService. vieUsers().subscribe(
      users =>{
       
       //console.log( localStorage.getItem('station_name'))
       //console.log(users.users)
       for (let index = 0; index < users.users.length; index++) {
         console.log(users.users[index].email)
         if (users.users[index].email == localStorage.getItem('fname')) {
           this.stationName=users.users[index].fname
           console.log(this.stationName)
         }
         
       }
    } ,
     
     error => this.errorMessage = <any>error);
  }

}
