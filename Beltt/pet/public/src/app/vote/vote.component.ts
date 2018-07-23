import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  pet;
  constructor(private _activedroute: ActivatedRoute, private _petservice: PetService) {
    
   }


  ngOnInit() {
    this._activedroute.paramMap.subscribe(
      param =>{
        this._petservice.ShowOnePet(param.get('id')).subscribe(
        res =>{
          this.pet = res.pet[0];
        }
      );}
    )
  }

  // Vote(idx){
  //   this.pet.options[idx][1] += 1;
  //   this._petservice.UpdatePet(this.pet).subscribe(
  //     res=>{
  //       console.log("Got a response from server updating pet.");
  //     },
  //     err =>{
  //       console.log("Frontend error attempting to update pet.", err);
  //     }
  //   )
  // }

}
