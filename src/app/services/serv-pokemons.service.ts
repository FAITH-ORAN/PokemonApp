import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServPokemonsService {
  pokemons = [ 
    { 'id': 1, 'nom': 'Bulbizarre', 'img': 'https://i.pinimg.com/originals/1e/ac/20/1eac2022b5bfa7b3fb53e0bf70b7e46b.jpg', 'categorie': 'graine', 'type': ['plante', 
 'poison'], 'taille': 0.70, 'poids': 6.9 }, 
    { 'id': 2, 'nom': 'Herbizarre', 'img': 'https://www.123-stickers.com/7671-thickbox/autocollant-herbizarre-pokemon-002.jpg', 'categorie': 'graine', 'type': ['plante', 
 'poison'], 'taille': 1, 'poids': 13 }, 
    { 'id': 3, 'nom': 'Florizarre', 'img': 'https://www.123-stickers.com/7672-large_default/autocollant-florizarre-pokemon-003.jpg', 'categorie': 'graine', 'type': ['plante', 
 'poison'], 'taille': 2, 'poids': 100 }, 
    { 'id': 4, 'nom': 'Salamèche', 'img': 'https://www.geeknplay.fr/wp-content/uploads/2019/11/Salam%C3%A8che.jpg', 'categorie': 'lézard', 'type': ['feu'], 
 'taille': 0.6, 'poids': 8.5 }, 
    { 'id': 5, 'nom': 'Reptincel', 'img': 'https://www.123-stickers.com/7674-thickbox/autocollant-reptincel-pokemon-005.jpg', 'categorie': 'flamme', 'type': ['feu'], 
 'taille': 1.1, 'poids': 19 }, 
    { 'id': 6, 'nom': 'Dracaufeu', 'img': 'https://www.g33kmania.com/wp-content/uploads/006_mega-dracaufeu-y.png', 'categorie': 'flamme', 'type': ['feu', 'vol'], 
 'taille': 1.7, 'poids': 90.5 } 
 ]; 
  constructor() { }

  getPokemons(){ 
   return this.pokemons;
  }
  getNumberOfPokemons(){
   return this.pokemons.length;
  }
}
