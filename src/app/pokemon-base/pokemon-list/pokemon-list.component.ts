import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  listOfPokemons!: Pokemon[];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
      this.listOfPokemons = data;
    });
  }

  handleRemove(event: Pokemon) {
    this.listOfPokemons = this.listOfPokemons.filter(
      (pokemon: Pokemon) => pokemon.id !== event.id
    );
  }
}
