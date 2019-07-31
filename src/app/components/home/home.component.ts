import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../services/recipe';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  recipes: Recipe[] = [];
  loading: boolean;
  meals = [];
  mealsSelected = [];

  errorMessageStrong = '';
  errorType = '';

  // Pagination
  from = 0;
  quantity = 12;

  constructor(private recipesService: RecipeService,
    public translate: TranslateService) {

    // Getting the meals array for the current translation
    translate.getTranslation(translate.currentLang).subscribe(translations => {
      this.meals = translations.meals;
    });

    // Changing meals translations on language change
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.meals = event.translations.meals;
    });
  }

  ngOnInit() {
    this.getRecipes();
  }




  /**
   * getRecipes()
   * Gets the last recipes
   */
  getRecipes() {
    this.loading = true;
    // console.log(this.from);
    this.recipesService.getRecipes(this.from, this.from + this.quantity).then((recipes: Recipe[]) => {
      console.log(this.recipes);
      console.log(recipes);

      this.recipes = this.recipes.concat(recipes);
      this.loading = false;
      this.from += this.quantity;
      // console.log(this.from);
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
      this.recipesService.getRecipes(this.from, this.quantity).then((recipes: Recipe[]) => {
        this.recipes = recipes;
        this.loading = false;
      });
    } else if (searchText.length > 1) {
      this.mealsSelected = [];
      this.loading = true;
      this.recipesService.searchRecipes(searchText).then((recipes: Recipe[]) => {
        this.recipes = recipes;
        if (this.recipes.length === 0) {
          this.errorType = 'searchError';
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
        this.errorType = 'filterError';
      }
      this.loading = false;
    });
  }
}
