import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-registerstations',
  templateUrl: './registerstations.component.html',
  styleUrls: ['./registerstations.component.css']
})
export class RegisterstationsComponent implements OnInit {
  region = {
    name: '',
  };
  district = {
    region: '',
    name: '',
    daddress: ''
  };
  ward = {
    district: '',
    name: '',
    waddress: ''
  };
  regions = [];
  districts = [];
  errorMessage: string;
  constructor(private adminService: AdminService) {
    setTimeout(function () {
      $(function () {
        $('#stations').DataTable({
          pagingType: 'full_numbers',
          pageLength: 5
        });
      });
    }, 2000);

  }

  ngOnInit() {

    this.adminService.viewRegions().subscribe(
      region => {
        this.regions = region.regions
        console.log('our', region)
        //(districts:ourDistrict[]) => this.districts= districts,
      },
      error => this.errorMessage = <any>error);
    this.adminService.viewDistricts().subscribe(
      district => {
        this.districts = district.districts
        console.log('our', district)
        //(districts:ourDistrict[]) => this.districts= districts,
      },
      error => this.errorMessage = <any>error);
  }

  form1(form: any) {

    this.adminService.registerRegion(this.region.name)
      .subscribe(
        resp => alert('Region  created!!'),
        error => alert('error')
      );
    form.reset();
  }
  form2(form: any) {

    this.adminService.registerDistrict(this.district.name, this.district.region, this.district.daddress)

      .subscribe(
        resp => alert('District  created!!'),
        error => alert('error')
      );
    form.reset();
  }
  form3(form: any) {

    this.adminService.registerWard(this.ward.name, this.ward.district, this.ward.waddress)

      .subscribe(
        resp => alert(' Ward  created!!'),
        error => alert('error')
      );
    form.reset();
  }



}
