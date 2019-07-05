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
    this.getRecipes();
  }

  /**
   * getRecipes()
   * Gets the last recipes
   */
  getRecipes() {
    this.loading = true;
    this.recipesService.getRecipes().then((recipes: Recipe[]) => {
      this.recipes = recipes;
      this.loading = false;
    });

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
    // If after searching they remove the text I load all the recipes back
    if (searchText.length === 0) {
      this.loading = true;
      this.recipesService.getRecipes().then((recipes: Recipe[]) => {
        this.recipes = recipes;
        this.loading = false;
      });
    } else if (searchText.length <= 1) {
      // If there is just 1 character it does not search
      return;
    } else if (searchText.length > 1) {
      this.loading = true;

      this.recipesService.searchRecipes(searchText).then((recipes: Recipe[]) => {
        this.recipes = recipes;
        this.loading = false;
      });
    }
  }

}
