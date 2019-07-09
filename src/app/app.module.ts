import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// dates in other language
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    RecipeComponent,
    RecipeCardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
