import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userServ:UserService) { }

  ngOnInit(): void {
    this.userServ.getUsers().subscribe(data=>{
      console.log(data);
    },err=>{
      console.log("error in getting data "+err);
    })
  }

}
