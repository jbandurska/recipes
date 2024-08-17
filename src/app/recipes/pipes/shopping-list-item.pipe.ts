import { Pipe, PipeTransform } from '@angular/core';
import { ShoppingListItem } from '../models/shopping-list-item.model';
import { IngredientService } from '../services/ingredient.service';

@Pipe({
  name: 'shoppingListItem',
  standalone: true,
})
export class ShoppingListItemPipe implements PipeTransform {
  constructor(private ingredientService: IngredientService) {}

  transform(item: ShoppingListItem): string {
    const quantities = item.quantities
      .map((q) => this.ingredientService.getQuantityString(q))
      .join(' + ');

    return `${item.name} (${quantities})`;
  }
}
