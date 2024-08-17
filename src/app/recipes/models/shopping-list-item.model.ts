import { IngredientBase } from './ingredient.model';

export interface ShoppingListItem {
  name: string;
  quantities: IngredientBase[];
}
