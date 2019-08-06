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
   * Returns the array of recipes ordered with the last ones first
   */
  getRecipes(from, quantity): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      resolve(
        {
          recipes: RECIPES.sort((a, b) => b.dateCreated.getTime() - a.dateCreated.getTime()).slice(from, quantity),
          total: RECIPES.length
        }
      );
    });
    return promise;
  }

  /**
   * getRecipe()
   * Returns the recipe that matches the id
   * @params{
   *   id { String }: recipe id
   * }
   */
  getRecipe(id: string): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      resolve(RECIPES.find(recipe => recipe.id === id));
    });
    return promise;
  }

  
  /**
   * searchRecipes()
   * Searchs the recipes array and returns the ones that their
   * title includes the search text
   * @params{
   *   text { String }: the text to search
   * }
   */
  searchRecipes(text: string): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      resolve(RECIPES.filter(recipes => recipes.title.toLowerCase().includes(text.toLowerCase())));
    });
    return promise;
  }
  /**
   * filterRecipesByMeal()
   * Searchs the recipes array and returns the recipes where their meal
   * is included in the mealsToFilter array
   * @params{
   *   mealsToFilter { Number[] }: array of meals numbers selected
   * }
   */
  filterRecipesByMeal(mealsToFilter: number[]): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      resolve(
        {
          recipes: RECIPES.filter(recipes => mealsToFilter.includes(recipes.meal)),
          total: RECIPES.filter(recipes => mealsToFilter.includes(recipes.meal)).length
        }
      );
    });
    return promise;
    
  }

}

