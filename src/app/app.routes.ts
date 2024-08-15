import { Routes } from '@angular/router';
import { RecipeComponent } from './recipes/components/recipe/recipe.component';
import { RecipesPageComponent } from './recipes/components/recipes-page/recipes-page.component';

export const routes: Routes = [
  {
    path: '',
    component: RecipesPageComponent,
  },
  {
    path: ':recipeName',
    component: RecipeComponent,
  },
];
