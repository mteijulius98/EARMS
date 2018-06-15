import { Component, OnInit } from '@angular/core';
import { HosService } from '../hos.service';

@Component({
  selector: 'app-schoolresources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  icategories=[];
  sclasses=[];
  tlmcategories=[];
  eqcategories=[];
  errorMessage:string;
  constructor(private hosService:HosService) { }

  ngOnInit() {
    this.hosService.viewIncategory().subscribe(
      icategory =>{
      this.icategories=icategory.icategories
      console.log('our',icategory)
      //(districts:ourDistrict[]) => this.districts= districts,
      },
      error => this.errorMessage = <any>error);
      this.hosService.viewClasses().subscribe(
        sclass =>{
        this.sclasses=sclass.sclasses
        console.log('our',sclass)
        //(districts:ourDistrict[]) => this.districts= districts,
        },
        error => this.errorMessage = <any>error);
        this.hosService.viewTlcategories().subscribe(
          tlmcategory =>{
          this.tlmcategories=tlmcategory.tlmcategories
          console.log('our',tlmcategory)
          //(districts:ourDistrict[]) => this.districts= districts,
          },
          error => this.errorMessage = <any>error);
          this.hosService.viewEqcategory().subscribe(
            eqcategory =>{
            this.eqcategories=eqcategory.eqcategories
            console.log('our',eqcategory)
            //(districts:ourDistrict[]) => this.districts= districts,
            },
            error => this.errorMessage = <any>error);
  }
  form8(form:any){
    
    this.hosService.registerInfrastructure(form.value.name,form.value.available,form.value.needed,form.value.category)
    
    .subscribe(
      resp =>alert('Infrastrucructure Added'),
      error=>alert('error')
    );
   form.reset();
  }
  form9(form:any){
    
    this.hosService.registerTlmaterial(form.value.name,form.value.available,form.value.sclass,form.value.tlcategory)
    
    .subscribe(
      resp =>alert('Material Added'),
      error=>alert('error')
    );
   form.reset();
  }
form10(form:any){
    
  this.hosService.registerEquipment(form.value.name,form.value.available,form.value.sclass,form.value.eqcategory)
    
    .subscribe(
      resp =>alert('Equipment Added'),
      error=>alert('error')
    );
   form.reset();
  }
form11(form:any){
    
this.hosService.registerService(form.value.name,form.value.availability)
      
    .subscribe(
        resp =>alert('Service Added'),
        error=>alert('error')
      );
     form.reset();
    }
}
