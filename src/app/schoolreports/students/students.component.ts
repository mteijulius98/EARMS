import { Component, OnInit } from '@angular/core';
import { WeoService } from '../../weo/weo.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students=[];
  formI=[];
  form2=[];
  form3=[];
  form4=[];
  form5=[];
  form6=[];
  errorMessage:string;
  constructor(private weoService:WeoService) { }

  ngOnInit() {
    this.weoService.viewSdatas().subscribe(
      student =>{
      this.students=student.students
      student.students.map(x=>{
        if (x.name == "Form 1") {
          this.formI.push(x)
        }
        else if(x.name == "Form 2"){
          this.form2.push(x)
        }
        else if(x.name == "Form 3"){
          this.form3.push(x)
        }
        else if(x.name == "Form 4"){
          this.form4.push(x)
        }
        else if(x.name == "Form 5"){
          this.form5.push(x)
        }
        else if(x.name == "Form 6"){
          this.form6.push(x)
        }
      })
      console.log("form 1",this.form3)
      console.log('our',student)
      },
      error => this.errorMessage = <any>error);
  }

}
