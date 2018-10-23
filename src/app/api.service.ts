import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private Http: HttpClient) { }

  fetchApi = (url) => {
    return this.Http.get(url);
  }

  getAllPokemon = () => {
    return this.fetchApi('https://pokeapi.co/api/v2/pokemon/');
  }

  getPokemon = url => {
    return this.fetchApi(url);
  }
}
