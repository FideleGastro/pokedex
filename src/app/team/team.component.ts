import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { LocalStorage, SharedStorage } from 'ngx-store';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @SharedStorage() inputSearch = {};
  pokemons = null;
  pokemon = null;
  storedPokemons = null;
  search = this.inputSearch;

  constructor(private Api: ApiService, public toastr: ToastrManager) { }

  ngOnInit() {
    this.Api.getMyTeam().subscribe(
      data => {
        this.pokemons = data;
        this.storedPokemons = data;
      }, err => {
        console.error(err);
      });
  }

  deleteMyPokemon = (pokemon) => {
    console.log( 'pokemon' , this.pokemons);
    this.pokemons = this.pokemons.filter(e => e.id !== pokemon.id);
    this.Api.deletePokemon(pokemon).subscribe();
    this.toastr.successToastr(`remove  ${pokemon.name}`, 'Success!');
  }

  searchPokemon = search => {
    this.pokemons = this.storedPokemons.filter(el => el.name.search(search) != -1);
    console.log('test:', search);
  }
}
