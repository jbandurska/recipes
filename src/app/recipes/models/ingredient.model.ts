import { Unit } from '../enums/unit.enum';

export interface IngredientBase {
  quantity: number;
  unit: Unit;
}

export interface Ingredient extends IngredientBase {
  name: string;
}
