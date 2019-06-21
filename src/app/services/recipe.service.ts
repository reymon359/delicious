import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { RECIPES } from './recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = RECIPES;

  constructor() { }
 
  getCountries(): Rec[] {
    return COUNTRIES;
  }
 
  getPopulatedCountries(): Rec[] {
    return COUNTRIES.sort((a, b) => b.population - a.population).slice(0, 3);
  }
 
  getLargestCountries(): Rec[] {
    return COUNTRIES.sort((a, b) => b.area - a.area).slice(0, 3);
  }
 
  getGDPCountries(): Rec[] {
    return COUNTRIES.sort((a, b) => b.gdp - a.gdp).slice(0, 3);
  }
 
  getRec(name: string): Rec {
    return COUNTRIES.find(country => country.name === name);
  }
}


