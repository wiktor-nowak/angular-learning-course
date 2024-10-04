import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { NgFor } from '@angular/common';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
import { PokemonService } from './services/pokemon.service';
import { UnlessDirective } from './directives/unless/unless.directive';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { SomeReactiveFormComponent } from './some-reactive-form/some-reactive-form.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { TodosService } from './services/todos.service';

@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    UnlessDirective,
    HighlightDirective,
    SomeReactiveFormComponent,
    NotfoundComponent,
    HomeComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgFor,
    PokemonBaseModule,
    ReactiveFormsModule,
  ],
  providers: [PokemonService, TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}

// https://youtu.be/uBgptTSejD4?si=25hHxvSLPhTXe--b&t=74
