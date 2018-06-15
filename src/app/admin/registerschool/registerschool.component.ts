import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-registerschool',
  templateUrl: './registerschool.component.html',
  styleUrls: ['./registerschool.component.css']
})
export class RegisterschoolComponent implements OnInit {
  categories=[];
  ownerships=[];
  schools=[];
  wards=[];
  errorMessage:string;
  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.adminService.viewCategories().subscribe(
      category =>{
      this.categories=category.categories
      console.log('our',category)
      //(districts:ourDistrict[]) => this.districts= districts,
      },
      error => this.errorMessage = <any>error);
      this.adminService.viewOwnerships().subscribe(
        ownership =>{
        this.ownerships=ownership.ownerships
        console.log('our',ownership)
        //(districts:ourDistrict[]) => this.districts= districts,
        },
        error => this.errorMessage = <any>error);
        this.adminService.viewSchools().subscribe(
          school =>{
          this.schools=school.schools
         
          //(districts:ourDistrict[]) => this.districts= districts,
          },
          error => this.errorMessage = <any>error);
          this.adminService.viewWards().subscribe(
            ward =>{
            this.wards=ward.wards
           
            //(districts:ourDistrict[]) => this.districts= districts,
            },
            error => this.errorMessage = <any>error);
  }
  form3(form:any){
    
    this.adminService.registerSchool(form.value.schoolname,form.value.regno,form.value.regdate,form.value.postal_address,form.value.ownership,form.value.category,form.value.email,form.value.ward,form.value.phonenumber,)

    .subscribe(
      resp =>alert('School  created!!'),
      error=>alert('error')
    );
   form.reset();
  }
  form6(form:any){
    
    this.adminService.registerOwnership(form.value.ownershipname)

    .subscribe(
      resp =>alert('Category  created!!'),
      error=>alert('error')
    );
   form.reset();
  }
  form7(form:any){
    
    this.adminService.registerCategory(form.value.categoryname)

    .subscribe(
      resp =>alert('Type  created!!'),
      error=>alert('error')
    );
   form.reset();
  }

}
