import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  current_user;
  pet = {qtext: "", options: [["", 0], ["", 0], ["", 0], ["", 0]], user: ""}
  constructor(private _petservice: PetService, private _userservice: UserService, private _router: Router) { }

  ngOnInit() {
    this._userservice.getCurrentUser().subscribe(
      res =>{if(res){this.current_user = res;}}
    )
  }

  onSubmit(){
    // for(let i=0; i<this.pet.options.length; i++){
    //   this.pet.options[i][1] = 1;
    // }
    console.log(this.pet);
    this._petservice.CreatePet(this.pet).subscribe(
      res=>{
        console.log("Got a response at pet creation.", res);
      },
      err =>{
        console.log("Angular/front-end error at pet creation.", err)
      }
    );
    this.pet = {qtext: "", options: [["", 1], ["", 1], ["", 1], ["", 1]], user: ""};
    this._router.navigateByUrl('/dashboard');
    
  }


}
