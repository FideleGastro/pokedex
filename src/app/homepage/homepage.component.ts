import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  constructor(private Api: ApiService, private route: ActivatedRoute, public toastr: ToastrManager) { }

  pokemons = null;
  storedPokemons = null;
  pokemon = null;

  ngOnInit() {
    this.Api.getAllPokemon().subscribe(
      data => {
        this.pokemons = data['results'];
        this.storedPokemons = data['results'];
      }, err => {
        console.error(err);
      });
      
      this.route.data.subscribe((data) => console.log('ddd', data));
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
    this.toastr.successToastr(`add ${pokemon.name}`, 'Success!');
  }

  filterPokemon = (event, data) => {
    event.preventDefault();
    this.pokemons = this.storedPokemons;
    
  }

  searchPokemon = search => {
    this.pokemons = this.storedPokemons.filter(el => el.name.search(search) != -1);
    console.log('test:', search);
  }
}
