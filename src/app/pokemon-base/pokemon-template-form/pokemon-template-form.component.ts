import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonType } from 'src/app/models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
      value: 'fire',
    },
    {
      key: 1,
      value: 'water',
    },
    {
      key: 2,
      value: 'rock',
    },
    {
      key: 3,
      value: 'electricity',
    },
  ];
  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  toggleIsCool(object: boolean) {
    console.log(object);
  }

  handleSubmit(form: NgForm) {
    console.log(form.form.value);
  }

  ngOnInit() {
    this.pokemon = {} as Pokemon;
    // console.log(this.route.snapshot.params['id']); // getting only once, not dynamic, not changing...
    this.route.params.subscribe((data: Params) => {
      this.pokemonService.getPokemon(data['id']).subscribe((data: Pokemon) => {
        this.pokemon = data;
      });
    });
  }

  back(): void {
    this.router.navigate(['/pokemon']);
  }
}

// https://www.youtube.com/watch?v=UIKdmGMG42U&list=PL82C6-O4XrHdf0LMDVl1Y-4_BFbNmdrGc&index=17&ab_channel=TeddySmith
