import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SubmitComponent } from './components/submit/submit.component';
import { AboutComponent } from './components/about/about.component';


const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'submit', component: SubmitComponent },
    { path: 'about', component: AboutComponent },
    { path: 'recipe/:id', component: RecipeComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
// The useHash is more efficient and is for using hashes in the routes
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });