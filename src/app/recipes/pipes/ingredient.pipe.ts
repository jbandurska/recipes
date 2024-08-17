import { Pipe, PipeTransform } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { IngredientService } from '../services/ingredient.service';

@Pipe({
  name: 'ingredient',
  standalone: true,
})
export class IngredientPipe implements PipeTransform {
  constructor(private ingredientService: IngredientService) {}

  transform(ingredient: Ingredient): string {
    return `${ingredient.name} - ${this.ingredientService.getQuantityString(
      ingredient
    )}`;
  }
}
