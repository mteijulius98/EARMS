import { Component, OnInit } from '@angular/core';
import { WeoService } from '../../weo/weo.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students=[];
  ostudents=[];
  school_id:any;
  dstudents=[];
  formI=[];
  form12=[];
  form23=[];
  form13=[];
  form33=[];
  form43=[];
  form53=[];
  form63=[];
  form22=[];
  form32=[];
  form42=[];
  form52=[];
  form62=[]; form8=[]; form9=[]; form10=[]; form11=[]; form20=[]; form30=[];
  form2=[];
  form3=[];
  form4=[];
  form5=[];
  form6=[];
  swards=[];
  spec=[];
  dents=[];
  tclasses=[];
  
  errorMessage:string;
  constructor(private weoService:WeoService) { }

  ngOnInit() {
    this.weoService.viewWschools().subscribe(
      sward =>{
      this.swards=sward.swards
      },
      error => this.errorMessage = <any>error);
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
      },
      error => this.errorMessage = <any>error);

      this.weoService.viewSorphans().subscribe(
        ostudent =>{
        this.ostudents=ostudent.students
        ostudent.ostudents.map(x=>{
          if (x.name == "Form 1") {
            this.form12.push(x)
          }
          else if(x.name == "Form 2"){
            this.form22.push(x)
          }
          else if(x.name == "Form 3"){
            this.form32.push(x)
          }
          else if(x.name == "Form 4"){
            this.form42.push(x)
          }
          else if(x.name == "Form 5"){
            this.form52.push(x)
          }
          else if(x.name == "Form 6"){
            this.form62.push(x)
          }
        })
        },
        error => this.errorMessage = <any>error);

        this.weoService.viewSdisable().subscribe(
          dstudent =>{
          this.dstudents=dstudent.students
          dstudent.dstudents.map(x=>{
            if (x.name == "Form 1") {
              this.form13.push(x)
            }
            else if(x.name == "Form 2"){
              this.form23.push(x)
            }
            else if(x.name == "Form 3"){
              this.form33.push(x)
            }
            else if(x.name == "Form 4"){
              this.form43.push(x)
            }
            else if(x.name == "Form 5"){
              this.form53.push(x)
            }
            else if(x.name == "Form 6"){
              this.form63.push(x)
            }
          })
          },
          error => this.errorMessage = <any>error);
          this.weoService.viewSpeschool().subscribe(
            school =>{
            this.spec=school.spec
            },
            error => this.errorMessage = <any>error);
            this.weoService.viewSTotal().subscribe(
              dent =>{
              this.dents=dent.dents
              console.log('our', dent)
              },
              error => this.errorMessage = <any>error);
              this.weoService.viewCtotal().subscribe(
                tclass =>{
                this.tclasses=tclass.tclasses
                console.log('our', tclass)
                tclass.tclasses.map(x=>{
                  if (x.name == "Form 1") {
                    this.form8.push(x)
                  }
                  else if(x.name == "Form 2"){
                    this.form9.push(x)
                    
                  }
                  else if(x.name == "Form 3"){
                    this.form10.push(x)
                  }
                  else if(x.name == "Form 4"){
                    this.form11.push(x)
                  }
                  else if(x.name == "Form 5"){
                    this.form20.push(x)
                  }
                  else if(x.name == "Form 6"){
                    this.form30.push(x)
                  }
                })
                },
                error => this.errorMessage = <any>error);
  }
 
downloadPDF() {
  var report = document.getElementById('sreport'); 
   console.log(report);
    let doc = new jsPDF();

     let specialElementHandlers = {
      '#editor': function (element,renderer) {
        return true;
      }
    };
    doc.fromHTML(report.innerHTML,15,15,{
      'width':190,
      'elementHandlers':specialElementHandlers
    });
    doc.save('schoolreport.pdf');
 
}
}
