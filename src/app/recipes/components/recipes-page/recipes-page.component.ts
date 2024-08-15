import { Component } from '@angular/core';
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

  updateChosenRecipes([recipe, isChecked]: [Recipe, boolean]): void {
    if (isChecked) {
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
    );
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
}
