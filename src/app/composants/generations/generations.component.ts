import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {
  generation=["Génération 1","Génération 2","Génération 3","Génération 4","Génération 5","Génération 6","Génération 7",]
  constructor() { }

  ngOnInit(): void {
  }

}
