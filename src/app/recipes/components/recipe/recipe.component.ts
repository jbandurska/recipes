import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { first } from 'rxjs';
import { RECIPES } from '../../data/recipes.data';
import { Recipe } from '../../models/recipe.models';
import { IngredientPipe } from '../../pipes/ingredient.pipe';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [IngredientPipe, RouterLink],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent implements OnInit, OnDestroy {
  recipe?: Recipe;

  get stars(): string {
    return (
      '★'.repeat(this.recipe?.rating || 0) +
      '☆'.repeat(5 - (this.recipe?.rating || 0))
    );
  }

  constructor(private renderer: Renderer2, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe((params) => {
      const title = params['recipeName'];
      this.recipe = RECIPES.find((r) => r.title === title);

      this.renderer.setStyle(
        document.body,
        'background-image',
        `url(${this.recipe?.photo})`
      );
    });
  }

  ngOnDestroy(): void {
    this.renderer.setStyle(document.body, 'background-image', '');
  }
}
