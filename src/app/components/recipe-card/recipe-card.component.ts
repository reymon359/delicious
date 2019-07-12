import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../services/recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styles: []
})
export class RecipeCardComponent implements OnInit {

  meals = ['Comida', 'Cena', 'Postre', 'Almuerzo', 'Aperitivo', 'Entrante', 'Sopa', 'Ensalada'];
  
  @Input() recipe: any = {}; // The recipe info comes from parent

  @Output() recipeSelected: EventEmitter<string>; // It is going to emmit a recipeId (string)

  constructor(private router: Router) {
    this.recipeSelected = new EventEmitter(); // Initialize the EventEmitter
  }

  ngOnInit() {
  }

  seeRecipe() {
    // The recipe card redirects to the recipe component
    this.router.navigate(['/recipe', this.recipe.id]);
    // The hero card emmits an event to the father component who redirects to the hero component
    // this.recipeSelected.emit(this.index);
  }
}
