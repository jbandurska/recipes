import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipesPageComponent } from './recipes/components/recipes-page/recipes-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipesPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
