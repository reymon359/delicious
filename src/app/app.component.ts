import { Component } from '@angular/core';
import { RecipesService } from './services/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dove-legacy';
  constructor(private recipesService: RecipesService) { }

}
