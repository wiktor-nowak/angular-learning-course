import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';

const POKEMON_API = 'http://localhost:3000/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {
    console.log(this.http);
  }

  getPokemon(id: number) {
    return this.http.get<Pokemon>(`${POKEMON_API}/1`);
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(POKEMON_API);
  }
}
