import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  constructor(private Api: ApiService, private route: ActivatedRoute) { }

  pokemons = null;
  pokemonsSaved = null;
  pokemon = null;

  ngOnInit() {
    this.Api.getAllPokemon().subscribe(
      data => {
        this.pokemons = data['results'];
        this.pokemonsSaved = data['results'];
      }, err => {
        console.error(err);
      });
      console.log('all poke: ', this.pokemons);
  }

  PokemonInfo = (event, url) => {
    event.preventDefault();
    this.Api.getPokemon(url).subscribe(
      data => {
        this.pokemon = data;
      }, err => {
        console.error(err);
      });
      console.log('all poke: ', this.pokemons);
  }

  addPokemon = (event) => {
    event.preventDefault();
    let pokemon = {
      name: this.pokemon.name,
      type: 'feeferfg',
      image: this.pokemon.sprites.front_default
    };
    this.Api.postPokemon(pokemon).subscribe();
  }

  filterPokemon = (event, data) => {
    event.preventDefault();
    this.pokemons = this.pokemonsSaved;
    this.pokemons = this.pokemons.filter(el => el.indexOf(data));
  }
}
