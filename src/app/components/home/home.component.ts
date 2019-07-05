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
  loading: boolean;
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

    // If after searching they remove the text I load all the recipes back
    if (searchText.length === 0) {
      this.recipes = this.recipesService.getRecipes();
    }

    // If there is just 1 character it does not search
    if (searchText.length <= 1) {
      return;
    }
    this.loading = true;

    this.recipesService.searchRecipes(searchText).then((recipes: Recipe[]) => {
      this.recipes = recipes;
      this.loading = false;
    });
  }

}
