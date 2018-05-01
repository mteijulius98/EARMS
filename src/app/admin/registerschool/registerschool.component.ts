import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-registerschool',
  templateUrl: './registerschool.component.html',
  styleUrls: ['./registerschool.component.css']
})
export class RegisterschoolComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit() {
  }
  form3(form:any){
    
    this.adminService.registerSchool(form.value.schoolRegNo,form.value.schoolname,form.value.wardname,form.value.PO_Box,form.value.ownership)

    .subscribe(
      resp =>alert('School  created!!'),
      error=>alert('error')
    );
   form.reset();
  }

}
