import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

// author jayachandra
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User={email:'',password:''};
  constructor(private _authService:AuthService,private _router:Router) { }

  ngOnInit(): void {
  }

  login(theUser: User)
  {
  console.log(theUser);
  this._authService.login(theUser).subscribe(data=>{
    console.log(data);
    localStorage.setItem('user',JSON.stringify(data));
    this._router.navigate(['/dashboard']);

  },err=>{
    console.log("===log in error "+ err)
  });

  }

}
