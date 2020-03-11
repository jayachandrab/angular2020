import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
     fullName: '',
     email: '',
     password: ''
   };
  constructor(private _authService:AuthService) { }

  ngOnInit(): void {
  }

  register(theUser:User) {
    this._authService.register(theUser).subscribe(data=>{
        console.log(data);
    },err=>{
      console.log("register error " +err);
    });

  }
}
