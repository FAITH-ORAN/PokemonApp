import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GenerationsComponent } from './composants/generations/generations.component';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';
import localeFR from '@angular/common/locales/fr';
import {FormsModule} from '@angular/forms'; 
import { PokemonComponent } from './composants/pokemon/pokemon.component';
import { HeaderComponent } from './composants/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CompteComponent } from './composants/compte/compte.component';
import { SeConnecterComponent } from './composants/se-connecter/se-connecter.component';


registerLocaleData(localeFR); 
@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent,
    PokemonComponent,
    HeaderComponent,
    CompteComponent,
    SeConnecterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
