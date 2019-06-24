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

}
