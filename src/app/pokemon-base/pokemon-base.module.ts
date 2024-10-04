import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PokemonTemplateFormComponent } from './pokemon-template-form/pokemon-template-form.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PokemonListComponent },
      { path: ':id', component: PokemonTemplateFormComponent },
    ],
  },
];

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonTemplateFormComponent,
  ],
  imports: [
    CommonModule,
    NgFor,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonTemplateFormComponent,
  ],
})
export class PokemonBaseModule {}
