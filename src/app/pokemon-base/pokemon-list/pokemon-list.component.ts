import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  listOfPokemons: Pokemon[];

  constructor() {
    this.listOfPokemons = [
      {
        id: 1,
        name: 'pikachu',
        type: 'electric',
        isCool: false,
        isStylish: true,
      },
      {
        id: 1,
        name: 'squirtle',
        type: 'water',
        isCool: true,
        isStylish: true,
      },
      {
        id: 1,
        name: 'charmander',
        type: 'fire',
        isCool: true,
        isStylish: false,
      },
      {
        id: 1,
        name: 'bulbasaur',
        type: 'nature',
        isCool: false,
        isStylish: true,
      },
    ];
  }

  ngOnInit(): void {}
}
