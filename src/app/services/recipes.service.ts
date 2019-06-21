import { Injectable } from '@angular/core';
import { RECIPES } from './recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = RECIPES;
  
    constructor() {
    console.log('recipeService ');
    console.log('recipes: ', this.recipes);
   }
}


