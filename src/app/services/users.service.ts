import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import {  AuthService } from "./auth.service";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _router:Router,private http:HttpClient,private auth:AuthService) { }

  getUsers(){
    let token;
    if(this.auth.isAuthenticated()){
      const user = JSON.parse(this.auth.isAuthenticated());
      token=user.token ? user.token:'';
    }
    const httpOptions = {
     headers:new HttpHeaders({
       'Content-Type' : 'application/json',
       'Authorization':token
     })
    }
  return this.http.get('/getusers',httpOptions);
  }


}
