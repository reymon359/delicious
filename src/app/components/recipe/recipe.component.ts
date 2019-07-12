import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../services/recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styles: []
})
export class RecipeComponent implements OnInit {

  recipe: Recipe;
  meals = ['Comida', 'Cena', 'Postre', 'Almuerzo', 'Aperitivo', 'Entrante', 'Sopa', 'Ensalada'];
  
  constructor(private activatedRoute: ActivatedRoute, private route: Router,
              private recipeService: RecipeService) {
    this.activatedRoute.params.subscribe(params => {
      this.recipeService.getRecipe(params.id).then(recipe => {

        // If the recipe does not exists we redirect to not found
        if (recipe === undefined) {
          this.route.navigate(['not-found']);
        } else {
          this.recipe = recipe;
          console.log(this.recipe);
        }


      });
    });
  }

  ngOnInit() {
  }

}
