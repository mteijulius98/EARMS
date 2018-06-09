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
    
    this.adminService.registerSchool(form.value.name,form.value.regno,form.value.regdate,form.value.postal_address,form.value.category,form.value.ownership,form.value.district,form.value.ward,form.value.region)

    .subscribe(
      resp =>alert('School  created!!'),
      error=>alert('error')
    );
   form.reset();
  }

}
