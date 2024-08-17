import { Ingredient } from './ingredient.model';

export interface Recipe {
  title: string;
  rating: number;
  photo: string;
  checked?: boolean;
  vegetarian: boolean;
  prepTime: number;
  link?: string;
  ingredients: Ingredient[];
  steps: string[];
}
