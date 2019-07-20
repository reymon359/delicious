import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';
import { Recipe } from '../../services/recipe';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  recipes: Recipe[] = [];
  loading: boolean;
  meals = ['Comida', 'Cena', 'Postre', 'Almuerzo', 'Aperitivo', 'Entrante', 'Sopa', 'Ensalada'];
  mealsSelected = [];

  
  errorMessage = '';
  errorMessageStrong = '';

  constructor(private recipesService: RecipeService, 
    private router: Router,
    public translate: TranslateService) { }

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
    // If after searching they remove the text I load all the recipes back
    if (searchText.length === 0) {
      this.loading = true;
      this.recipesService.getRecipes().then((recipes: Recipe[]) => {
        this.recipes = recipes;
        this.loading = false;
      });
    } else if (searchText.length > 1) {
      this.mealsSelected = [];
      this.loading = true;
      this.recipesService.searchRecipes(searchText).then((recipes: Recipe[]) => {
        this.recipes = recipes;
        if (this.recipes.length === 0) {
          this.errorMessage = 'Parece que no hay ninguna receta con el título'
          this.errorMessageStrong = searchText;
        }
        this.loading = false;
      });
    }
  }

  /**
   * filterByMeals()
   * Sends the meal filters to the recipesService and 
   * updates the recipes.
   */
  filterByMeals() {
    // console.log(this.mealsSelected);
    if (this.mealsSelected.length === 0 || this.mealsSelected.length === this.meals.length) {
      this.getRecipes();
      return;
    }
    this.loading = true;
    this.recipesService.filterRecipesByMeal(this.mealsSelected).then((recipes: Recipe[]) => {
      this.recipes = recipes;
      if (this.recipes.length === 0) {
        this.errorMessage = 'Parece que no hay ninguna receta de ese tipo';
        this.errorMessageStrong = ' ';
      }
      this.loading = false;
    });
  }
}
