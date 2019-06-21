import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() {
    console.log('recipeServices ');
   }
}

// Recipe interface
export interface Recipe {
  id: string; // recipe id
  title: string; // Title
  img: string; // Main recipe img
  desc: string; // Recipe description
  time: string; // Cooking time
  steps: Step[];
}

// Steps interface
export interface Step {
  number: number;  // step number
  title: string; // Title
  img: string; // step img
  desc: string; // Steps description
}
