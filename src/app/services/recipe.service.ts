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
  getRecipes(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      // setTimeout(() => {
        resolve(RECIPES.sort((a, b) => b.dateCreated.getTime() - a.dateCreated.getTime()));

      // }, Math.round(Math.random() * 2500) + 1500);
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
      // setTimeout(() => {
        resolve(RECIPES.find(recipe => recipe.id === id));

      // }, Math.round(Math.random() * 2500) + 1500);
    });
    return promise;
  }

  getLastRecipes(): Recipe[] {
    return RECIPES.sort((a, b) => b.dateCreated.getTime() - a.dateCreated.getTime()).slice(0, 3);
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
      setTimeout(() => {
        resolve(RECIPES.filter(recipes => recipes.title.toLowerCase().includes(text.toLowerCase())));

      }, Math.round(Math.random() * 2500) + 1500);
    });
    return promise;
  }

  filterRecipesByMeal(mealsToFilter: number[]): Promise<any> {
    // return RECIPES.filter(recipes => recipes.meal = meal);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(RECIPES.filter(recipes => mealsToFilter.includes(recipes.meal)));
      }, Math.round(Math.random() * 2500) + 1500);
    });
    return promise;
  }

}

