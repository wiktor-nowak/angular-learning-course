import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { NgFor } from '@angular/common';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';

@NgModule({
  declarations: [AppComponent, InputBindingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgFor,
    PokemonBaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// https://youtu.be/uBgptTSejD4?si=25hHxvSLPhTXe--b&t=74
