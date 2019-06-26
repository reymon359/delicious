import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../services/recipe';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styles: []
})
export class RecipeComponent implements OnInit {

  recipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) {
    this.activatedRoute.params.subscribe(params => {
      this.recipe = this.recipeService.getRecipe(params.id);
      console.log(this.recipe);
    });
  }

  ngOnInit() {
  }

}
