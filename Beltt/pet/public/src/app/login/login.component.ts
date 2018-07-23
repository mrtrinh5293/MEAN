import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {name: ""};
  constructor(private _userservice: UserService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this._userservice.LogInUser(this.user).subscribe(
      (res) => {
        this._userservice.current_user.next(res.json().user);
        this._router.navigateByUrl('/dashboard');
        },
      (err) => {
        console.log("err", err);
      }
    );
    this.user = {name: ""};
  }
}

