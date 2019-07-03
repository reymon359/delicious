import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { RECIPES } from './recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = RECIPES;

  constructor() { }

  /**
   * getRecipes()
   * Returns the array of recipes like it is
   */
  getRecipes(): Recipe[] {
    return RECIPES;
  }

  /**
   * getRecipe()
   * Returns the recipe that matches the id
   * @params{
   *   id { String }: recipe id
   * }
   */
  getRecipe(id: string): Recipe {
    return RECIPES.find(recipe => recipe.id === id);
  }

  getLastRecipes(): Recipe[] {
    return RECIPES.sort((a, b) => b.dateCreated.getTime() - a.dateCreated.getTime()).slice(0, 3);
  }

  searchRecipes(text: string): Recipe[] {
    return RECIPES.filter( recipes => recipes.title.includes(text) );
    
    // return RECIPES.sort((a, b) => b.dateCreated.getTime() - a.dateCreated.getTime()).slice(0, 3);

  //   const inventory = [
  //     {name: 'apples', quantity: 2},
  //     {name: 'bananas', quantity: 0},
  //     {name: 'cherries', quantity: 5}
  // ];
  
  // const result = inventory.find( fruit => fruit.name === 'cherries' );
  
  // console.log(result) // { name: 'cherries', quantity: 5 }
  }

  filterRecipesByMeal(meal: string): Recipe[] {
    return RECIPES.filter( recipes => recipes.meal = meal );
  }
  
}


