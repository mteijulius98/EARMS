import { Component, OnInit } from '@angular/core';
import { HosService } from '../hos.service';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})

export class StaffsComponent implements OnInit {
    teachers=[];
    errorMessage:string;
    ntstaffs=[];
  constructor(private hosService:HosService) { }

  ngOnInit() {
    this.hosService.viewTeachers().subscribe(
      teacher =>{
      this.teachers=teacher.teachers
      console.log('our',teacher)
      //(districts:ourDistrict[]) => this.districts= districts,
      },
      error => this.errorMessage = <any>error);
      this.hosService.viewNtStaff().subscribe(
        ntstaff =>{
        this.ntstaffs=ntstaff.ntstaffs
        console.log('our',ntstaff)
        //(districts:ourDistrict[]) => this.districts= districts,
        },
        error => this.errorMessage = <any>error);
  }
  form13(form:any){
    
    this.hosService.registerNtstaff(form.value.designation,form.value.count)
    
    .subscribe(
      resp =>alert('Information Submitted'),
      
    );
   form.reset();
  }
  form14(form:any){
    
    this.hosService.registerTeacher(form.value.fname,form.value.mname,form.value.lname,form.value.sex,form.value.birth,form.value.edlevel,form.value.epdate,form.value.epid,form.value.subcate)
    
    .subscribe(
      resp =>alert('Information Submitted'),
      
    );
   form.reset();
  }

}
