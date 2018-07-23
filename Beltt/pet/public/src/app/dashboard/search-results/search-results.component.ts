import { Component, OnInit, Input } from '@angular/core';
// import { NgSwitch } from '@angular/common';
import { PetService } from '../../pet.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() query;
  @Input() current_user;
  results = [];
  constructor(private _petservice: PetService, private _router: Router) { }

  ngOnInit() {
    this.showAll();
  }

  resultify(q){
    var searchResults = [];
    for(let i=0; i<this.results.length;i++){
      if(this.results[i].qtext.toLowerCase().includes(q.toLowerCase())){
        searchResults.push(this.results[i]);
      }
    }
    return searchResults;
  }

showAll(){
    this._petservice.ShowAllPets().subscribe(
      res =>{
        this.results = res.pets;
      }
    )
  }

  Delete(id){
    this._petservice.DeletePet(id);
    this._router.navigateByUrl('/')
  }
}
