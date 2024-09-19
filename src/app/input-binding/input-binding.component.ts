import { Component } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.scss'],
})
export class InputBindingComponent {
  favAnimal: string = 'tortoise';
  pokemonName: string = '';
  someTrueValue: boolean = false;
  infoErrorText: string = '';
  listOfPokemons2: Pokemon2[];

  constructor() {
    this.listOfPokemons2 = [
      {
        name: 'Pikachu',
        power: 10,
        isSpecial: false,
        isElectric: true,
      },
      {
        name: 'Bulbazaur',
        power: 6,
        isSpecial: true,
        isElectric: false,
      },
      {
        name: 'Snorlax',
        power: 3,
        isSpecial: false,
        isElectric: false,
      },
    ];
  }
  handleClick(value: string) {
    console.log(value);
  }
}

interface Pokemon2 {
  name: string;
  power: number;
  isSpecial: boolean;
  isElectric: boolean;
}
