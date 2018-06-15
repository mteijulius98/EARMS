import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';

@Injectable()
export class AdminService {
  public token=localStorage.getItem("token")
  constructor(private http:Http) { }
  registerWard(wardname:any, districtname:any,postal_address:any){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization','jwt '+ this.token);
    headers.append('X-Requested-With','XMLHttpRequest');
    let options = {
    headers: headers
};
let body = JSON.stringify({wname:wardname, district_id:districtname,postal_address:postal_address});
return this.http.post("http://localhost/fypyear/public/api/ward", body, options).map( (response:Response) => response.json());
    
 }
//  registerUser(wardname:any, districtname:any,postal_address:any){
//   let headers = new Headers();
//   headers.append('Content-Type', 'application/json');
//   headers.append('Authorization','jwt '+ this.token);
//   headers.append('X-Requested-With','XMLHttpRequest');
//   let options = {
//   headers: headers
// };
// let body = JSON.stringify({wname:wardname, district_id:districtname,postal_address:postal_address});
// return this.http.post("http://localhost/fypyear/public/api/ward", body, options).map( (response:Response) => response.json());
  
// }
 registerDistrict(districtname:any,region:any,postal_address:any){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization','jwt '+ this.token);
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers: headers
};
let body = JSON.stringify({dname:districtname, region_id:region,postal_address:postal_address});
return this.http.post("http://localhost/fypyear/public/api/district", body, options).map( (response:Response) => response.json());
  
}
registerRegion(regionname:any){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization','jwt '+ this.token);
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers: headers
};
let body = JSON.stringify({rname:regionname});
return this.http.post("http://localhost/fypyear/public/api/region", body, options).map( (response:Response) => response.json());
  
}
registerOwnership(ownershipname:any){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization','jwt '+ this.token);
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers: headers
};
let body = JSON.stringify({name:ownershipname});
return this.http.post("http://localhost/fypyear/public/api/ownership", body, options).map( (response:Response) => response.json());
  
}
registerCategory(categoryname:any){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization','jwt '+ this.token);
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers: headers
};
let body = JSON.stringify({name:categoryname});
return this.http.post("http://localhost/fypyear/public/api/category", body, options).map( (response:Response) => response.json());
  
}
registerRole(role_name:any, role_initial:any){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization','jwt '+ this.token);
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers: headers
};
let body = JSON.stringify({roname:role_name,roinitial:role_initial});
return this.http.post("http://localhost/fypyear/public/api/role", body, options).map( (response:Response) => response.json());
  
}
registerSchool(schoolname:any,regno:any,regdate:any,postal_address:any,ownership:any,category:any,email:any,ward:any,phonenumber:any){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization','jwt '+ this.token);
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers: headers
};
let body = JSON.stringify({name:schoolname,regno:regno,regdate:regdate,postal_address:postal_address,sownership_id:ownership,scategory_id:category,email:email,ward_id:ward,phone_number:phonenumber});
return this.http.post("http://localhost/fypyear/public/api/school", body, options).map( (response:Response) => response.json());
  
}
// public viewUsers(){ 
//   let headers=new Headers()
//    headers.append('Authorization','jwt '+ this.token);
//    headers.append('Content-Type', 'application/json');
//   return this.http.get('http://localhost/fypyear/public/api/ausers',{headers:headers}).map(
// (res:Response)=>res.json(),


//     );
// }
public viewRegions(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/regions',{headers:headers}).map(
(res:Response)=>res.json(),


);
}
public viewDistricts(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/districts',{headers:headers}).map(
(res:Response)=>res.json(),


);
}
public viewRoles(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/roles',{headers:headers}).map(
(res:Response)=>res.json(),


);
}
public viewWards(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/wards',{headers:headers}).map(
(res:Response)=>res.json(),


);
}
public viewSchools(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/schools',{headers:headers}).map(
(res:Response)=>res.json(),


);
}
public viewDusers(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/dusers',{headers:headers}).map(
(res:Response)=>res.json(),


);
}
public viewSusers(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/susers',{headers:headers}).map(
(res:Response)=>res.json(),


);
}
public viewWusers(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/wusers',{headers:headers}).map(
(res:Response)=>res.json(),


);
}
public vieUsers(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/users',{headers:headers}).map(
(res:Response)=>res.json(),


);
}
public viewCategories(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/categories',{headers:headers}).map(
(res:Response)=>res.json(),


);
}
public viewOwnerships(){ 
  let headers=new Headers()
   headers.append('Authorization','jwt '+ this.token);
   headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost/fypyear/public/api/ownerships',{headers:headers}).map(
(res:Response)=>res.json(),


);
}


}
