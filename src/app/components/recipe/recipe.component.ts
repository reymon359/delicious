import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../services/recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styles: [`
    img {
        transition: opacity 1s;
        opacity: 0;
    }
    img.ng-lazyloaded {
        opacity: 1;
    }
  `],
})
export class RecipeComponent implements OnInit {
  public location;
  recipe: Recipe;
  meals = [];

  constructor(private activatedRoute: ActivatedRoute, private route: Router,
              private recipeService: RecipeService, public translate: TranslateService) {

    // Getting the meals array for the current translation
    translate.getTranslation(translate.currentLang).subscribe(translations => {
      this.meals = translations.meals;
    });

    // Changing meals translations on language change
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.meals = event.translations.meals;
    });


    this.activatedRoute.params.subscribe(params => {
      this.recipeService.getRecipe(params.id).then(recipe => {
        // If the recipe does not exists we redirect to not found
        if (recipe === undefined) {
          this.route.navigate(['not-found']);
        } else {
          this.recipe = recipe;
          // console.log(this.recipe);
        }


      });
    });
  }

  ngOnInit() {
    this.location = window.location.href;
  }
  print() {
    window.print();
  }

}
