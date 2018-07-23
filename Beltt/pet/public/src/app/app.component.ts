import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _userservice: UserService, private _router: Router){
  }
  ngOnInit(){
    this._userservice.whosLoggedIn()
  console.log("This is the app component.");}
}
