import { Component, OnInit } from '@angular/core';
import { HosService } from '../hos.service';
import { TimeService } from '../../shared/time.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
   sclasses=[];
   sdisabilities=[];
   students=[];
   sattendances=[];
   currentYear:any;
   errorMessage:string;
  constructor(private hosService:HosService,private timeService:TimeService) { }

  ngOnInit() {
    this.currentYear = this.timeService.showCurrentYear();
    this.hosService.viewClasses().subscribe(
      sclass =>{
      this.sclasses=sclass.sclasses
      },
      error => this.errorMessage = <any>error);
      this.hosService.viewDisabilities().subscribe(
        sdisability =>{
        this.sdisabilities=sdisability.sdisabilities
        },
        error => this.errorMessage = <any>error);
        this.hosService.viewStudents().subscribe(
          student =>{
          this.students=student.students
          },
          error => this.errorMessage = <any>error);
          this.hosService.viewAttendances().subscribe(
            sattendance =>{
            this.sattendances=sattendance.sattendances
            },
            error => this.errorMessage = <any>error);
  }
  form31(form:any){
    
    this.hosService.registerStudent(form.value.firstname,form.value.sex,form.value.sclass,form.value.orphan,form.value.middlename,form.value.birthdate,form.value.status,form.value.sdisability1,form.value.lastname,form.value.admsn,form.value.lifestatus,form.value.nationality)
    
    .subscribe(
      resp =>alert('Student Added'),
      error=>alert('error')
    );
   form.reset();
  }
  form32(form:any){
    
    this.hosService.registerAttendance(form.value.avgmale,form.value.avgfemale,form.value.from,form.value.to,form.value.sclass)
    
    .subscribe(
      resp =>alert('Information  Added'),
      error=>alert('error')
    );
   form.reset();
  }

}
