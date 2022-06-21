import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router'; 
import { CompteComponent } from './composants/compte/compte.component';
import { GenerationsComponent } from './composants/generations/generations.component';
import { HeaderComponent } from './composants/header/header.component';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';
import { SeConnecterComponent } from './composants/se-connecter/se-connecter.component';


const routes: Routes = [   
{path: 'génération', component: GenerationsComponent},
{path:'pokémons',component:PokemonsComponent},
{path:'creerUnCompte',component:CompteComponent},
{path:'seConnecter',component:SeConnecterComponent},
{path: '**', component: HeaderComponent}]

@NgModule({ 
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule] 
   }) 
   export class AppRoutingModule { } 