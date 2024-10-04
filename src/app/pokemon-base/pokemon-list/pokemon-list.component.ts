import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent implements OnInit, AfterViewInit {
  listOfPokemons!: Pokemon[];
  @ViewChildren('pokemonRef') pokemonRef!: ElementRef;
  @ViewChild('pokemonTh') pokemonTh!: ElementRef;
  constructor(
    private pokemonService: PokemonService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
      this.listOfPokemons = data;
    });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.pokemonTh.nativeElement.innerText = 'Pokemon Name'; // this may be dangerous
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Some text');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.pokemonTh.nativeElement, div);
  }

  handleRemove(event: Pokemon) {
    this.listOfPokemons = this.listOfPokemons.filter(
      (pokemon: Pokemon) => pokemon.id !== event.id
    );
  }
}
