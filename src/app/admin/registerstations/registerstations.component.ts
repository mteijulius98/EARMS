import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-registerstations',
  templateUrl: './registerstations.component.html',
  styleUrls: ['./registerstations.component.css']
})
export class RegisterstationsComponent implements OnInit {
  regions=[];
  districts=[];
  errorMessage:string;
  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.adminService.viewRegions().subscribe(
      region =>{
      this.regions=region.regions
      console.log('our',region)
      //(districts:ourDistrict[]) => this.districts= districts,
      },
      error => this.errorMessage = <any>error);
      this.adminService.viewDistricts().subscribe(
        district =>{
        this.districts=district.districts
        console.log('our',district)
        //(districts:ourDistrict[]) => this.districts= districts,
        },
        error => this.errorMessage = <any>error);
  }
  form1(form:any){
    
    this.adminService.registerRegion(form.value.regionname)
    
    .subscribe(
      resp =>alert('Region  created!!'),
      error=>alert('error')
    );
   form.reset();
  }
  form2(form:any){
    
    this.adminService.registerDistrict(form.value.districtname,form.value.region,form.value.postal_address)
    
    .subscribe(
      resp =>alert('District  created!!'),
      error=>alert('error')
    );
   form.reset();
  }
  form3(form:any){
    
    this.adminService.registerWard(form.value.wardname,form.value.districtname,form.value.postal_address)
    
    .subscribe(
      resp =>alert(' Ward  created!!'),
      error=>alert('error')
    );
   form.reset();
  }



}
