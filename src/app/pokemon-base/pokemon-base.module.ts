import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent],
  imports: [CommonModule, NgFor, HttpClientModule],
  exports: [PokemonListComponent, PokemonDetailComponent],
})
export class PokemonBaseModule {}
