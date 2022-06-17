import { Component, OnInit } from '@angular/core';
import{ServPokemonsService} from '../../services/serv-pokemons.service';
import {PokemonM} from '../../models/pokemon-m';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
 pokemonSelectionne!:string;
 pokemons:any = []; 
  comptePokemon=0;
  formulairePokemon=new PokemonM("");
 
  constructor( private dependency:ServPokemonsService) { }

  ngOnInit(): void {
    this.pokemons=this.dependency.getPokemons();
    this.comptePokemon = this.dependency.getNumberOfPokemons(); 
  }

  auClic(donnees:string) { 
      donnees=donnees.trim()
      donnees=donnees.split(" ").join(""); 
      donnees=donnees.charAt(0).toUpperCase() + donnees.slice(1);
      const tab=this.dependency. getNameOfPokemons()
      if(tab.includes(donnees)){
        this.pokemons=this.dependency.rechercherPokemon(donnees); 
      }else{
        const tag = document.createElement("div");
        const text = document.createTextNode("ce Pokémons n'existe pas dans la base de donnée");
        tag.appendChild(text);
        const elementError = document.getElementById("error") as HTMLElement;
        elementError.appendChild(tag);
        tag.setAttribute("class", "alert alert-danger");
        tag.setAttribute("role", "alert");
      }
   
  } 

  annulerRecherche(){
    this.pokemons=this.dependency.getPokemons();
    this.formulairePokemon.setNom("");
  }

}


