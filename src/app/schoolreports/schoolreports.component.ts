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
       
      
       for (let index = 0; index < users.users.length; index++) {
       
         if (users.users[index].email == localStorage.getItem('fname')) {
           this.stationName=users.users[index].fname
         }
         
       }
    } ,
     
     error => this.errorMessage = <any>error);
  }

}
