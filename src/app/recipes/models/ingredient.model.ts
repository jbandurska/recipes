import { Unit } from '../enums/unit.enum';

export interface Ingredient {
  name: string;
  quantity: number;
  unit: Unit;
}
