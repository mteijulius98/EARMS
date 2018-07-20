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
registerClass(name:any){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization','jwt '+ this.token);
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers: headers
};
let body = JSON.stringify({name:name});
return this.http.post("http://localhost/fypyear/public/api/class", body, options).map( (response:Response) => response.json());
  
}
registerInfracategory(name:any){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization','jwt '+ this.token);
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers: headers
};
let body = JSON.stringify({name:name});
return this.http.post("http://localhost/fypyear/public/api/incategory", body, options).map( (response:Response) => response.json());
  
}
registerTlmcategory(name:any){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization','jwt '+ this.token);
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers: headers
};
let body = JSON.stringify({name:name});
return this.http.post("http://localhost/fypyear/public/api/tlmcategory", body, options).map( (response:Response) => response.json());
  
}
registerEqcategory(name:any){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization','jwt '+ this.token);
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers: headers
};
let body = JSON.stringify({name:name});
return this.http.post("http://localhost/fypyear/public/api/eqcategory", body, options).map( (response:Response) => response.json());
  
}

registerSdisability(name:any){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization','jwt '+ this.token);
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers: headers
};
let body = JSON.stringify({name:name});
return this.http.post("http://localhost/fypyear/public/api/disability", body, options).map( (response:Response) => response.json());
  
}
deleteUser(id:number){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization','jwt '+ this.token);
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers: headers
};
return this.http.delete("http://localhost/fypyear/public/api/user/ "+ id,options).map( (response:Response) => response.json());  
}
updateUser(id:number, firstname:any,middlename:any,lastname:any,email:any){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization','jwt '+ this.token);
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers: headers
};
  let body = JSON.stringify({fname:firstname,mname:middlename,lname:lastname,email:email});
  return this.http.put('http://localhost/nfypyear/public/api/user/' + id,body,options).map( (response:Response) => response.json());
}
registerSubject(name:any){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization','jwt '+ this.token);
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers: headers
};
let body = JSON.stringify({name:name});
return this.http.post("http://localhost/fypyear/public/api/subject", body, options).map( (response:Response) => response.json());
  
}
registerDreason(rname:any){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization','jwt '+ this.token);
  headers.append('X-Requested-With','XMLHttpRequest');
  let options = {
  headers: headers
};
let body = JSON.stringify({reason:rname});
return this.http.post("http://localhost/fypyear/public/api/reason", body, options).map( (response:Response) => response.json());
  
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
// updateSchool(schoolname:any,regno:any,regdate:any,postal_address:any,ownership:any,category:any,email:any,ward:any,phonenumber:any,id:number){
//   let headers = new Headers();
//   headers.append('Content-Type', 'application/json');
//   headers.append('Authorization','jwt '+ this.token);
//   headers.append('X-Requested-With','XMLHttpRequest');
//   let options = {
//   headers: headers
// };
//   let body = JSON.stringify({name:schoolname,regno:regno,regdate:regdate,postal_address:postal_address,sownership_id:ownership,scategory_id:category,email:email,ward_id:ward,phone_number:phonenumber});
//   return this.http.put('http://localhost/nfypyear/public/api/school/' + id,body,options).map( (response:Response) => response.json());
// }
public updateSchool(data2,data3,data5,data8,data10){
  let urlSearchParams = new FormData()
urlSearchParams.append('name', data2);
urlSearchParams.append('regno', data3);
// urlSearchParams.append('regdate', data4);
urlSearchParams.append('postal_address', data5);
urlSearchParams.append('email', data8);
urlSearchParams.append('phone_number', data10);

let body = urlSearchParams;
       return this.http.put( 'http://localhost/fypyear/public/api/school/'+localStorage.getItem('sid'),body).map(
           (res: Response) => res.json()              
       )
      }

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
