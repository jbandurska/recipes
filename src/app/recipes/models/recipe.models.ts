import { Ingredient } from './ingredient.model';

export interface Recipe {
  title: string;
  rating: number;
  photo?: string;
  ingredients: Ingredient[];
  steps: string[];
}
