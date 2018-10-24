import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { LocalStorage, SharedStorage } from 'ngx-store';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @SharedStorage() inputSearch = '';
  pokemons = null;
  pokemon = null;
  pokemonsFiltered = null;
  search = this.inputSearch;

  constructor(private Api: ApiService) { }

  ngOnInit() {
    this.Api.getMyTeam().subscribe(
      data => {
        this.pokemons = data;
        this.pokemonsFiltered = this.pokemons.filter(e => e.name.indexOf(this.inputSearch) === true);
        console.log(this.pokemons);
      }, err => {
        console.error(err);
      });
  }

  deleteMyPokemon = (pokemon) => {
    console.log( 'pokemon' , this.pokemons);
    this.pokemons = this.pokemons.filter(e => e.id !== pokemon.id);
    this.Api.deletePokemon(pokemon).subscribe();
  }
}
