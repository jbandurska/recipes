import { Injectable } from '@angular/core';
import { Ingredient, IngredientBase } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';
import { ShoppingListItem } from '../models/shopping-list-item.model';

type ShoppingList = {
  [key: string]: ShoppingListItem;
};

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  public shoppingList: ShoppingListItem[] = [];

  constructor() {}

  public updateShoppingList(recipes: Recipe[]): void {
    const ingredients: Ingredient[] = [];
    recipes.forEach((r) => ingredients.push(...r.ingredients));

    const shoppingList: ShoppingList = ingredients.reduce((prev, curr) => {
      const base: IngredientBase = {
        quantity: curr.quantity,
        unit: curr.unit,
      };

      if (prev[curr.name]) {
        this.addQuantity(prev[curr.name], base);
      } else {
        prev[curr.name] = {
          name: curr.name,
          quantities: [base],
        };
      }

      return prev;
    }, {} as ShoppingList);

    this.shoppingList = Object.values(shoppingList).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  private addQuantity(item: ShoppingListItem, base: IngredientBase): void {
    const quantity = item.quantities.find((q) => q.unit === base.unit);

    if (quantity) {
      quantity.quantity += base.quantity;
    } else {
      item.quantities.push(base);
    }
  }
}
