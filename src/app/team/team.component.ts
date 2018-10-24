import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  pokemons = null;
  pokemon = null;

  constructor(private Api: ApiService) { }

  ngOnInit() {
    this.Api.getMyTeam().subscribe(
      data => {
        this.pokemons = data;
        console.log(this.pokemons);
      }, err => {
        console.error(err);
      });
  }

  deleteMyPokemon = (pokemon) => {
    this.Api.deletePokemon(pokemon).subscribe();
  }
}
