import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { IUsers } from './users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUsers[];
  errorMessage:string;
 public constructor(private adminService:AdminService) { }

ngOnInit():void {
  this.adminService.viewUsers().subscribe(
      users => this.users = users,
      
      error => this.errorMessage = <any>error);
      
  
} 

}
