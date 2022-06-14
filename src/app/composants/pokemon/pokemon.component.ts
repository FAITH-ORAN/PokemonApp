import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
    @Input()  pokemon:{nom:string,img:string,categorie:string,type:string[],taille:number,poids:number}= {
      nom: '',
      img: '',
      categorie: '',
      type: [],
      taille: 0,
      poids:0
    }; 
    @Output() unEvenement = new EventEmitter(); 
   
    
  constructor() { }

  ngOnInit(): void {
  }


  unClicSurImage(nom: string){
    this.unEvenement.emit(nom); 
  }
}
