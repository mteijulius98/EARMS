import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-weo',
  templateUrl: './weo.component.html',
  styleUrls: ['./weo.component.css']
})
export class WeoComponent implements OnInit {
  private router: Router;
  errorMessage:string;
  stationName:string="";
  constructor(private adminService:AdminService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.adminService. vieUsers().subscribe(
      users =>{
       
       //console.log( localStorage.getItem('station_name'))
       //console.log(users.users)
       for (let index = 0; index < users.users.length; index++) {
        //  console.log(users.users[index].email)
         if (users.users[index].email == localStorage.getItem('fname')) {
           this.stationName=users.users[index].fname
          //  console.log(this.stationName)
         }
         
       }
    } ,
     
     error => this.errorMessage = <any>error);
  }

}
