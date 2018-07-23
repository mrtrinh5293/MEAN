import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  current_user = new BehaviorSubject(null);

  constructor(private _http: Http, private _router: Router) { }

  getCurrentUser(){
    return this.current_user;
  }

  //subscribe to these here
  whosLoggedIn(){
    return this._http.get('/whosLoggedIn').subscribe(
      (res) => {
        if(res.json().user == undefined){
          this._router.navigateByUrl('/login');
        }
        else{
          this.current_user.next(res.json().user);
          this._router.navigateByUrl('/dashboard');
        }
      },
      (err) => {
        console.log(err);
      }
    )};

    getLoggedUser(){
      return this._http.get('/getLoggedUser').subscribe(
        res =>{
          if(res.json().user == undefined){
            this._router.navigateByUrl('/loginreg');
          }
          else{
            console.log("res of getLoggedUser:", res.json());
            this.current_user.next(res.json().user);
        }
        err =>{console.log("Errors at getLoggedUser", err)}
      }
      )}

  LogInUser(user){
    return this._http.post('/login', user)};

  GetUser(id){
    return this._http.get('/getUser/' + id).subscribe(res=>{console.log("Getting user")}, err=>{console.log("errors:", err)});};

  LogOut(){
    this._http.get('/logout').subscribe(
      res =>{
      console.log("OK");
      this.current_user.next(null);
      this._router.navigateByUrl('/');
      })
  }

  Search(search){
    console.log("Searching in users:", search);
    return this._http.post('/users/search', search);
  }
}


