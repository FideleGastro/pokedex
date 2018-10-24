import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observer } from 'rxjs';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private Http: HttpClient) { }

  // fetch

  getFetchApi = (url) => {
    return this.Http.get(url);
  }

  postFetchApi = (url, body) => {
    return this.Http.post(url, body);
  }

  putFetchApi = (url, body) => {
    return this.Http.post(url, body);
  }

  deleteFetchApi = (url) => {
    return this.Http.delete(url);
  }

  // pokeapi

  getAllPokemon = () => {
    return this.getFetchApi('https://pokeapi.co/api/v2/pokemon/');
  }

  getPokemon = url => {
    return this.getFetchApi(url);
  }

  // back

  getMyTeam = () => {
    return this.getFetchApi('http://localhost:4000/pokemon') ;
  }

  countMyTeam = () => {
    return this.getFetchApi('https://pokeapi.co/api/v2/pokemon/');
  }

  postPokemon = data => {
    return this.postFetchApi('http://localhost:4000/pokemon', data);
  }

  putPokemon = data => {
    return this.putFetchApi('http://localhost:4000/pokemon', data);
  }

  deletePokemon = data => {
    return this.deleteFetchApi(`http://localhost:4000/pokemon/${data.id}`);
  }
}
