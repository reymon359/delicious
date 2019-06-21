import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private recipesService: RecipeService) { }

  ngOnInit() {
  }

}
