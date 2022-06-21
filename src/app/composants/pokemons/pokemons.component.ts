import { Component, OnInit } from '@angular/core';
import {  FormControl, Validators } from '@angular/forms';
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

  nom = new FormControl('', Validators.required); 
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
         const divAlert=document.getElementById("alertDiv");
         
        if(divAlert){
          divAlert.remove();
          }
        
      }else if(donnees==="C3PO"){
         this.pokemons=this.dependency.getEgg()
         const img = document.createElement("img");
          img.setAttribute('src', 'http://media.giphy.com/media/3o7bu1nVSxNQUWMAZa/source.gif');
          img.setAttribute("id","imgEgg")
          document.body.appendChild(img);
          console.log("C3PO")
          console.log(img)
      }else{
        const tag = document.createElement("div");
        const text = document.createTextNode("ce Pokémons n'existe pas dans la base de donnée");
        tag.appendChild(text);
        const elementError = document.getElementById("error") as HTMLElement;
        elementError.appendChild(tag);
        tag.setAttribute("class", "alert alert-danger");
        tag.setAttribute("role", "alert");
        tag.setAttribute("id", "alertDiv");
      }
   
  } 

  annulerRecherche(){
    this.pokemons=this.dependency.getPokemons();
    this.formulairePokemon.setNom("");
    const divAlert=document.getElementById("alertDiv");
    if(divAlert){
      divAlert.remove();
    }
    const img=document.getElementById("imgEgg")
    if (img){
      img.remove();
    }
    
  }

insertAfter(referenceNode:any, newNode:any) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

}


