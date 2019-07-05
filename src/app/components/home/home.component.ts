import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';
import { Recipe } from '../../services/recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private recipesService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
    console.log(this.recipes);
  }

  /**
   * searchRecipes()
   * Sends the search text to the recipesService and 
   * updates the recipes.
   * @params{
   *   searchText { String }: the text to search
   * }
   */
  searchRecipes(searchText: string) {
    console.log('enters');
   
    if (searchText.length <= 1) {
      console.log('0');
      return;
    }
    this.recipes = this.recipesService.searchRecipes(searchText);
  }

}
