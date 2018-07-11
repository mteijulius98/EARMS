import { Injectable,Input } from '@angular/core';
import { LoginServiceService } from '../login/login-service.service';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class DeoService {
  public token=localStorage.getItem("token")
  constructor(private loginService:LoginServiceService,private http:Http) { }
  public viewDwards(){ 
    const token=this.loginService.getToken();
    let headers=new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With','XMLHttpRequest');
    return this.http.get('http://localhost/fypyear/public/api/dwards/'+ localStorage.getItem('did'),{headers:headers}).map(
  (res:Response)=>res.json(),
      );
  }
  public viewWs(){ 
    const token=this.loginService.getToken();
    let headers=new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With','XMLHttpRequest');
    return this.http.get('http://localhost/fypyear/public/api/ws/'+ localStorage.getItem('eid'),{headers:headers}).map(
  (res:Response)=>res.json(),
      );
  }





 
}
