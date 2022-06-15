import { Component, OnInit } from '@angular/core';
import{ServPokemonsService} from '../../services/serv-pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
 pokemonSelectionne!:string;
 pokemons:any = []; 
comptePokemon=0;
   

  constructor( private dependency:ServPokemonsService) { }

  ngOnInit(): void {
    this.pokemons=this.dependency.getPokemons();
    this.comptePokemon = this.dependency.getNumberOfPokemons(); 
  }


}
