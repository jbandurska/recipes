import { Component, OnInit, Renderer2 } from '@angular/core';
import { RECIPES } from '../../data/recipes.data';
import { IngredientPipe } from '../../pipes/ingredient.pipe';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [IngredientPipe],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent implements OnInit {
  readonly recipe = RECIPES[0];

  get stars(): string {
    return '★'.repeat(this.recipe.rating) + '☆'.repeat(5 - this.recipe.rating);
  }

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      document.body,
      'background-image',
      `url(${this.recipe.photo})`
    );
  }
}
