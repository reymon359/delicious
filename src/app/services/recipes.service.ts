import { Injectable } from '@angular/core';
import { RECIPES } from './recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = RECIPES;
  
    constructor() {
    console.log('recipeServices ');
    console.log('recipes: ', this.recipes);
   }
}


