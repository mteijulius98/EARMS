import { Component, OnInit } from '@angular/core';
import { DeoService } from '../deo/deo.service';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-slo',
  templateUrl: './slo.component.html',
  styleUrls: ['./slo.component.css']
})
export class SloComponent implements OnInit {
  errorMessage:string;
  stationName:string="";
  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.adminService. vieUsers().subscribe(
      users =>{
       
       //console.log( localStorage.getItem('station_name'))
       //console.log(users.users)
       for (let index = 0; index < users.users.length; index++) {
        //  console.log(users.users[index].email)
         if (users.users[index].email == localStorage.getItem('fname')) {
           this.stationName=users.users[index].fname
            console.log(this.stationName)
         }
         
       }
    } ,
     
     error => this.errorMessage = <any>error);
  }

}
