import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs';
import 'rxjs/Rx';
@Injectable()
export class LoginServiceService {
  public token=localStorage.getItem("token")
  constructor(private http:Http) { }
  addUsers(firstname:any, lastname:any,email:any, password:any,station_name:any,role:any){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization','jwt '+ this.token);
    headers.append('X-Requested-With','XMLHttpRequest');
    let options = {
    headers: headers
};
let body = JSON.stringify({firstname: firstname, lastname:lastname,email:email, password:password,station_name:station_name,role:role});
return this.http.post("http://localhost/fypyear/public/api/users", body, options).map( (response:Response) => response.json());
   
    
 }
  signin(email: any, password:any){
    return this.http.post("http://localhost/fypyear/public/api/users/signin",
    {email:email, password:password},
  {headers:new Headers({'X-Requested-With':'XMLHttpRequest'})})

   .map((response: Response) => {
    // login successful if there's a jwt token in the response
    let  user = response.json();
    if (user) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
       localStorage.setItem('token',user.token);
       if (user.role !== 'admin') {
         localStorage.setItem('station_name', email);
       }
    }
    return user;
   });

  }
  
logout() {
    // remove user from local storage to log user out
   
    localStorage.clear();
  
}
getToken(){
  return localStorage.getItem('token');
  
}

}

