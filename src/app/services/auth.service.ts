import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router:Router,private http:HttpClient) { }
  isAuthenticated(){
    return localStorage.getItem('user');
  }
  register(user){
  return this.http.post('/register',user);
  }

  login(user){
    return this.http.post('/login',user);
  }
  logout(){
    console.log("log out");
    localStorage.clear();
    this._router.navigate(['/login']);

  }
}
