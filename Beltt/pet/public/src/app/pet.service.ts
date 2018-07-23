import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class PetService {

  constructor(private _http: Http, private _router: Router) { }

  CreatePet(pet){
    return this._http.post('/createPet', pet);
  };

  ShowOnePet(id){
    return this._http.get("/showOnePet/" + id).map((response) => response.json());;
  };

  ShowAllPets(){
    return this._http.get('/showAllPets').map((response) => response.json());
  };

  DeletePet(id){
    return this._http.delete('/deletePet/' + id).subscribe(res=>{this._router.navigateByUrl('/dashboard/my-list');}, err=>{console.log("services error:", err)});
  };

  Search(search){
    return this._http.post('/pets/search', search);
  }

  UpdatePet(pet){
    return this._http.post('/updatePet', pet);
  }


}

