import { Pipe, PipeTransform } from '@angular/core';
import { isPlural } from '../enums/unit.enum';
import { Ingredient } from '../models/ingredient.model';

@Pipe({
  name: 'ingredient',
  standalone: true,
})
export class IngredientPipe implements PipeTransform {
  transform(ingredient: Ingredient): string {
    return `${ingredient.name} - ${
      Math.round(ingredient.quantity * 100) / 100 || ''
    } ${ingredient.unit}${
      isPlural(ingredient.unit) && ingredient.quantity > 1 ? 's' : ''
    }`;
  }
}
