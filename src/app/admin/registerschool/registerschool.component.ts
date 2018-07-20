import { Component, OnInit ,Input} from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import { AdminService } from '../admin.service';
import { SCHOOL } from './school';
import { WeoService } from '../../weo/weo.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-registerschool',
  templateUrl: './registerschool.component.html',
  styleUrls: ['./registerschool.component.css']
})
export class RegisterschoolComponent implements OnInit {
  @Input() school:SCHOOL;
  sownership = {
    category: ''
  };
  stype = {
    type: ''
  };
  rschool = {
    name: '',
    regno: '',
    regdate: '',
    type: '',
    ownership: '',
    ward:'',
    saddress:'',
    email:'',
    phone_number:''
  };
  categories=[];
  ownerships=[];
  schools=[];
  wards=[];
  spec=[];
  errorMessage:string;
  editing = false;
  editValue ='';
  constructor(private adminService:AdminService,private weoService:WeoService) { 
    setTimeout(function (){
      $(function(){
        $('#schools').DataTable();
        });
         },2000);

  }

  ngOnInit() {
    this.adminService.viewCategories().subscribe(
      category =>{
      this.categories=category.categories
      },
      error => this.errorMessage = <any>error);
      
      this.adminService.viewOwnerships().subscribe(
        ownership =>{
        this.ownerships=ownership.ownerships
        // console.log('our',ownership)
        // //(districts:ourDistrict[]) => this.districts= districts,
        },
        error => this.errorMessage = <any>error);
        this.adminService.viewSchools().subscribe(
          school =>{
          this.schools=school.schools
         
         
          },
          error => this.errorMessage = <any>error);
          this.adminService.viewWards().subscribe(
            ward =>{
            this.wards=ward.wards
           
            },
            error => this.errorMessage = <any>error);
  }
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
};
IdStored(id){
    localStorage.removeItem('sid')
    localStorage.setItem('sid', id)
    this.weoService.viewSpeschool().subscribe(
      spe =>{
      this.spec=spe.spec
      console.log('our',spe)
      },
      error => this.errorMessage = <any>error);  
 }

 
onEdit(){
    this.editing = true;
    this.editValue =this.school.name,this.school.regno,this.school.postal_address,this.school.phone_number,this.school.email;
  }
onUpdate(){
    this.adminService.updateSchool(this.school.name,this.school.regno,this.school.postal_address,this.school.email,this.school.phone_number)
    .subscribe(
       (school: SCHOOL) => {
         this.school.name,this.school.regno,this.school.postal_address,this.school.phone_number,this.school.email= this.editValue;
         this.editValue = '';
       }
    );
    
    this.editing = false;
  }
onCancel(){
    this.editValue='';
    this.editing = false;
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
  form16(form:any){
    
    this.adminService.registerClass(form.value.name)

    .subscribe(
      resp =>alert('Class  created!!'),
      error=>alert('error')
    );
   form.reset();
  }
  form18(form:any){
    
    this.adminService.registerInfracategory(form.value.name)

    .subscribe(
      resp =>alert('Category  created!!'),
      error=>alert('error')
    );
   form.reset();
  }
  form19(form:any){
    
    this.adminService.registerTlmcategory(form.value.name)

    .subscribe(
      resp =>alert('Category  created!!'),
      error=>alert('error')
    );
   form.reset();
  }
  form20(form:any){
    
    this.adminService.registerEqcategory(form.value.name)

    .subscribe(
      resp =>alert('Category  created!!'),
      error=>alert('error')
    );
   form.reset();
  }
  form21(form:any){
    
    this.adminService.registerSdisability(form.value.name)

    .subscribe(
      resp =>alert('Information Added!!'),
      error=>alert('error')
    );
   form.reset();
  }
   form22(form:any){
    
    this.adminService.registerSubject(form.value.name)

    .subscribe(
      resp =>alert('Subject Added!!'),
      error=>alert('error')
    );
   form.reset();
  }
 form23(form:any){
    
    this.adminService.registerDreason(form.value.rname)

    .subscribe(
      resp =>alert('Reason Added!!'),
      error=>alert('error')
    );
   form.reset();
  }
}
