import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon, PokemonType } from 'src/app/models/pokemon';
import { PokemonService } from '../services/pokemon.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.scss'],
})
export class PokemonTemplateFormComponent implements OnInit {
  pokemon!: Pokemon;
  pokemonTypes: PokemonType[] = [
    {
      key: 0,
      value: "fire"
    },
    {
      key: 1,
      value: "water"
    },
    {
      key: 2,
      value: "rock"
    },
    {
      key: 3,
      value: "electricity"
    }
  ]
  constructor(private pokemonService: PokemonService) {}

  toggleIsCool(object: boolean) {
    console.log(object)
  }

  handleSubmit(form: NgForm) {
    console.log(form.form.value)
  }

  ngOnInit() {
    this.pokemonService.getPokemon(1).subscribe((data: Pokemon) => {
      this.pokemon = data;
    });
  }
}

// https://www.youtube.com/watch?v=UIKdmGMG42U&list=PL82C6-O4XrHdf0LMDVl1Y-4_BFbNmdrGc&index=17&ab_channel=TeddySmith
