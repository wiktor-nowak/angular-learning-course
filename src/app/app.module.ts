import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { NgFor } from '@angular/common';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
import { PokemonService } from './services/pokemon.service';
import { PokemonTemplateFormComponent } from './pokemon-template-form/pokemon-template-form.component';
import { UnlessDirective } from './directives/unless/unless.directive';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { SomeReactiveFormComponent } from './some-reactive-form/some-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    PokemonTemplateFormComponent,
    UnlessDirective,
    HighlightDirective,
    SomeReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgFor,
    PokemonBaseModule,
    ReactiveFormsModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}

// https://youtu.be/uBgptTSejD4?si=25hHxvSLPhTXe--b&t=74
