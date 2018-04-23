import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs';
import 'rxjs/Rx';
@Injectable()
export class LoginServiceService {

  constructor(private http:Http) { }
  
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
    }
    return user;
   });

  }
  
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  
}
getToken(){
  return localStorage.getItem('token');
  
}

}

