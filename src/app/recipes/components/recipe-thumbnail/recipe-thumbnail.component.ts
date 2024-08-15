import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../models/recipe.models';

@Component({
  selector: 'app-recipe-thumbnail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recipe-thumbnail.component.html',
  styleUrl: './recipe-thumbnail.component.scss',
})
export class RecipeThumbnailComponent {
  @Input({ required: true }) recipe!: Recipe;

  @Output() checked = new EventEmitter<[Recipe, boolean]>();

  isChecked = false;

  toggleRecipe(recipe: Recipe): void {
    this.isChecked = !this.isChecked;
    this.checked.emit([recipe, this.isChecked]);
  }
}
