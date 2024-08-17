import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-thumbnail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recipe-thumbnail.component.html',
  styleUrl: './recipe-thumbnail.component.scss',
})
export class RecipeThumbnailComponent {
  @Input({ required: true }) recipe!: Recipe;

  toggleRecipe(recipe: Recipe): void {
    recipe.checked = !recipe.checked;
  }
}
