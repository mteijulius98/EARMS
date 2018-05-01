import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 users: any [] =[
   {
     "firstName":"Charles",
     "lastName":"Temba",
     "email":"latemba@gmail.com",
     "stationName":"UDSM",
     "role":"admin"
   }
  ];
  constructor() { }

  ngOnInit() {
  }

}
