import { Ingredient } from './ingredient.model';

export interface Recipe {
  title: string;
  rating: number;
  photo: string;
  checked?: boolean;
  ingredients: Ingredient[];
  steps: string[];
}
