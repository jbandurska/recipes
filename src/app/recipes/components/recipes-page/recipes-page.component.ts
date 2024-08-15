import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RECIPES } from '../../data/recipes.data';
import { Ingredient } from '../../models/ingredient.model';
import { Recipe } from '../../models/recipe.models';
import { IngredientPipe } from '../../pipes/ingredient.pipe';
import { RecipeThumbnailComponent } from '../recipe-thumbnail/recipe-thumbnail.component';

@Component({
  selector: 'app-recipes-page',
  standalone: true,
  imports: [RecipeThumbnailComponent, IngredientPipe],
  templateUrl: './recipes-page.component.html',
  styleUrl: './recipes-page.component.scss',
})
export class RecipesPageComponent {
  readonly recipes = RECIPES;
  chosenRecipes: Recipe[] = [];
  shoppingList: Ingredient[] = [];

  copyButtonText: 'copy to clipboard' | 'copied ✔' = 'copy to clipboard';

  constructor(private router: Router) {}

  updateChosenRecipes(recipe: Recipe): void {
    if (recipe.checked) {
      this.chosenRecipes.push(recipe);
    } else {
      this.chosenRecipes = this.chosenRecipes.filter(
        (r) => r.title !== recipe.title
      );
    }

    this.updateShoppingList();
  }

  private updateShoppingList(): void {
    const ingredients: Ingredient[] = [];
    this.chosenRecipes.forEach((r) => ingredients.push(...r.ingredients));

    this.shoppingList = Object.values(
      ingredients.reduce((prev, curr) => {
        if (prev[curr.name]?.unit === curr.unit) {
          prev[curr.name].quantity += curr.quantity;
        } else {
          prev[curr.name] = { ...curr };
        }

        return prev;
      }, {} as { [key: string]: Ingredient })
    ).sort((a, b) => a.name.localeCompare(b.name));
  }

  copyToClipboard(): void {
    const list: string = this.shoppingList
      .map((i) => `${i.name} (${i.quantity} ${i.unit})`)
      .join('\n');
    navigator.clipboard.writeText(list);

    this.copyButtonText = 'copied ✔';
    setTimeout(() => {
      this.copyButtonText = 'copy to clipboard';
    }, 1000);
  }

  goToRandomRecipe(): void {
    const recipes = this.shuffleArray(this.recipes);
    this.router.navigate([recipes[0]?.title]);
  }

  getThreeRandomRecipes(): void {
    const recipes = this.shuffleArray(this.recipes);

    recipes.forEach((r, i) => {
      r.checked = i < 3;
    });

    this.chosenRecipes = recipes.slice(0, 3);
    this.updateShoppingList();
  }

  private shuffleArray<T>(array: T[]) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
  }
}
