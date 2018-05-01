import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';

@Injectable()
export class AdminService {
  public token=localStorage.getItem("token")
  constructor(private http:Http) { }
  registerWard(wardname:any, districtname:any,PO_Box:any){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization','jwt '+ this.token);
    headers.append('X-Requested-With','XMLHttpRequest');
    let options = {
    headers: headers
};
let body = JSON.stringify({w_name:wardname, district_name:districtname,PO_Box:PO_Box});
return this.http.post("http://localhost/fypyear/public/api/ward", body, options).map( (response:Response) => response.json());
    
 }
 registerDistrict(districtname:any, region:any,PO_Box:any){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization','jwt '+ this.token);
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers: headers
};
let body = JSON.stringify({name:districtname, region:region,PO_Box:PO_Box});
return this.http.post("http://localhost/fypyear/public/api/district", body, options).map( (response:Response) => response.json());
  
}
registerSchool(schoolRegNo:any,schoolname:any,wardname:any,PO_Box:any,ownership:any){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization','jwt '+ this.token);
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers: headers
};
let body = JSON.stringify({reg_no:schoolRegNo,s_name:schoolname,ward_name:wardname,PO_Box:PO_Box,ownership:ownership});
return this.http.post("http://localhost/fypyear/public/api/school", body, options).map( (response:Response) => response.json());
  
}
}
