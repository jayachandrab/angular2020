import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private _authService:AuthService) { }

  ngOnInit(): void {
  }
  logout(){
this._authService.logout();
  }

}
