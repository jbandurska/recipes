import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CopyButtonComponent } from '../../../shared/components/copy-button/copy-button.component';
import { RECIPES } from '../../data/recipes.data';
import { ShoppingListItem } from '../../models/shopping-list-item.model';
import { IngredientPipe } from '../../pipes/ingredient.pipe';
import { ShoppingListItemPipe } from '../../pipes/shopping-list-item.pipe';
import { IngredientService } from '../../services/ingredient.service';
import { ShoppingListService } from '../../services/shopping-list.service';
import { RecipeThumbnailComponent } from '../recipe-thumbnail/recipe-thumbnail.component';

@Component({
  selector: 'app-recipes-page',
  standalone: true,
  imports: [
    RecipeThumbnailComponent,
    IngredientPipe,
    ShoppingListItemPipe,
    CopyButtonComponent,
  ],
  templateUrl: './recipes-page.component.html',
  styleUrl: './recipes-page.component.scss',
})
export class RecipesPageComponent {
  public recipes = RECIPES;
  private readonly itemPipe = new ShoppingListItemPipe(this.ingredientService);

  get shoppingList(): ShoppingListItem[] {
    return this.shoppingListService.shoppingList;
  }

  get contentToCopy(): string {
    return this.shoppingList.map((i) => this.itemPipe.transform(i)).join('\n');
  }

  constructor(
    private router: Router,
    private shoppingListService: ShoppingListService,
    private ingredientService: IngredientService
  ) {}

  goToRandomRecipe(): void {
    const recipes = this.shuffleArray(this.recipes);
    this.router.navigate([recipes[0]?.title]);
  }

  getThreeRandomRecipes(): void {
    const recipes = this.shuffleArray(this.recipes);

    recipes.forEach((r, i) => {
      r.checked = i < 3;
    });

    this.recipes = RECIPES.sort((a, b) => {
      const sortChecked = (b.checked ? 1 : 0) - (a.checked ? 1 : 0);
      return sortChecked || a.title.localeCompare(b.title);
    });
  }

  generateShoppingList(): void {
    const chosenRecipes = this.recipes.filter((r) => r.checked);
    this.shoppingListService.updateShoppingList(chosenRecipes);

    setTimeout(() => document.getElementById('shoppingList')?.scrollIntoView());
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
