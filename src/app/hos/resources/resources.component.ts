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
  infrastructures=[];
  tlmaterials=[];
  equipments=[];
  errorMessage:string;
  constructor(private hosService:HosService) {
    setTimeout(function (){
      $(function(){
        $('#infraList').DataTable();
        });
         },2000);
         setTimeout(function (){
          $(function(){
            $('#tlm').DataTable();
            });
             },2000);
             setTimeout(function (){
              $(function(){
                $('#equipment').DataTable();
                });
                 },2000);
   }

  ngOnInit() {
    this.hosService.viewIncategory().subscribe(
      icategory =>{
      this.icategories=icategory.icategories
      //(districts:ourDistrict[]) => this.districts= districts,
      },
      error => this.errorMessage = <any>error);
      this.hosService.viewClasses().subscribe(
        sclass =>{
        this.sclasses=sclass.sclasses
        
        //(districts:ourDistrict[]) => this.districts= districts,
        },
        error => this.errorMessage = <any>error);
        this.hosService.viewTlcategories().subscribe(
          tlmcategory =>{
          this.tlmcategories=tlmcategory.tlmcategories
        
          //(districts:ourDistrict[]) => this.districts= districts,
          },
          error => this.errorMessage = <any>error);
          this.hosService.viewEqcategory().subscribe(
            eqcategory =>{
            this.eqcategories=eqcategory.eqcategories
          
            //(districts:ourDistrict[]) => this.districts= districts,
            },
            error => this.errorMessage = <any>error);
            this.hosService.viewInfrastructure().subscribe(
              infrastructure =>{
              this.infrastructures=infrastructure.infrastructures
              },
              error => this.errorMessage = <any>error);
              this.hosService.viewEquipments().subscribe(
                equipment =>{
                this.equipments=equipment.equipments
                },
                error => this.errorMessage = <any>error);
                this.hosService.viewTlmaterials().subscribe(
                  tlmaterial =>{
                  this.tlmaterials=tlmaterial.tlmaterials
                  
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
    
    this.hosService.registerTlmaterial(form.value.name,form.value.tlcategory,form.value.sclass,form.value.available,form.value.needed)
    
    .subscribe(
      resp =>alert('Material Added'),
      error=>alert('error')
    );
   form.reset();
  }
form10(form:any){
    
  this.hosService.registerEquipment(form.value.name,form.value.available,form.value.sclass1,form.value.eqcategory,form.value.needed)
    
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
