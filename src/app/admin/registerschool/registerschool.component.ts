import { Component, OnInit ,Input} from '@angular/core';
import { AdminService } from '../admin.service';
import { SCHOOL } from './school';

@Component({
  selector: 'app-registerschool',
  templateUrl: './registerschool.component.html',
  styleUrls: ['./registerschool.component.css']
})
export class RegisterschoolComponent implements OnInit {
  @Input() school:SCHOOL;
  categories=[];
  ownerships=[];
  schools=[];
  wards=[];
  errorMessage:string;
  editing = false;
  editValue ='';
  constructor(private adminService:AdminService) { 
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
 
  onEdit(){
    this.editing = true;
    this.editValue =this.school.name,this.school.regno,this.school.regdate,this.school.postal_address,this.school.phone_number,this.school.email,this.school.id;
  }
  onUpdate(){
    this.adminService.updateSchool(this.school.id,this.school.name,this.school.regno,this.school.regdate,this.school.postal_address,this.school.scategory_id,this.school.email,this.school.ward_id,this.school.phone_number,this.school.sownership_id)
    .subscribe(
       (school: SCHOOL) => {
         this.school.name,this.school.sownership_id,this.school.regno,this.school.regdate,this.school.postal_address,this.school.phone_number,this.school.email,this.school.scategory_id = this.editValue;
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
