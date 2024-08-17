import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { first } from 'rxjs';
import { CopyButtonComponent } from '../../../shared/components/copy-button/copy-button.component';
import { RECIPES } from '../../data/recipes.data';
import { Recipe } from '../../models/recipe.model';
import { IngredientPipe } from '../../pipes/ingredient.pipe';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [IngredientPipe, RouterLink, CopyButtonComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent implements OnInit, OnDestroy {
  recipe?: Recipe;

  private readonly itemPipe = new IngredientPipe(this.ingredientService);

  get stars(): string {
    return (
      '★'.repeat(this.recipe?.rating || 0) +
      '☆'.repeat(5 - (this.recipe?.rating || 0))
    );
  }

  get contentToCopy(): string {
    return (this.recipe?.ingredients || [])
      .map((i) => this.itemPipe.transform(i))
      .join('\n');
  }

  constructor(
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private ingredientService: IngredientService
  ) {}

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
    this.renderer.setStyle(
      document.body,
      'background-image',
      'url("https://img.freepik.com/free-vector/cooking-pattern-design_1284-545.jpg?t=st=1723746881~exp=1723750481~hmac=bb15cc5fa50765168668ce23c43b57f0ba85137419ebfa2e6bab57dcb4f29bb0&w=740")'
    );
  }
}
