import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private Api: ApiService) { }

  pokemons = [];
  pokemon = null;

  ngOnInit() {
    this.Api.getAllPokemon().subscribe(
      data => {
        this.pokemons = data['results'];
        console.log(this.pokemons);
      }, err => {
        console.error(err);
      });
  }

  PokemonInfo = (event, url) => {
    event.preventDefault();
    this.Api.getPokemon(url).subscribe(
      data => {
        this.pokemon = data;
        console.log(this.pokemon);
      }, err => {
        console.error(err);
      });
  }

  addPokemon = (event) => {
    event.preventDefault();
    let pokemon = {
      name: this.pokemon.name,
      type: "feeferfg",
      image: this.pokemon.sprites.front_default
    }

    this.Api.postPokemon(pokemon).subscribe();
  }
}
