import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent {
  readonly recipe = {
    title: 'Kurczak Curry',
    rating: 5,
    ingredients: [
      '1 podwójna pierś z kurczaka - 650 g',
      '1 spora czerwona papryka',
      '1 spora cebula',
      '1 średnia marchewka',
      '3 duże ząbki czosnku',
      'mały kawałek świeżego imbiru - 4 cm',
      '1 szklanka mleczka kokosowego',
      'pół szklanki bulionu drobiowego',
      '4 łyżki delikatnej oliwy',
      '2 łyżki łagodnej pasty curry',
      '1 łyżka przyprawy curry',
    ],
    steps: [
      'Dwa filety z kurczaka oczyść i pokrój w kostkę/kawałki nie większe niż 2 cm. Do miseczki z gotowym do smażenia mięsem dodaj łyżkę przyprawy curry w proszku. Całość wymieszaj i odstaw.',
      'Zacznij nagrzewać dużą patelnię z grubym dnem i z wysokimi rantami. Wlej cztery łyżki delikatnej (nie gorzkiej) oliwy (może być też zwykły olej do smażenia). Po chwili wyłóż też obraną i posiekaną cebulę. Podsmażaj ją na średniej mocy palnika przez pięć minut.',
      'Dodaj obraną i pokrojoną w krótkie i cienkie słupki marchewkę. Zaraz potem dodaj też oczyszczoną z gniazda nasiennego i pokrojoną w kostkę czerwoną paprykę. Wszystko wymieszaj i podsmażaj dalej na średniej mocy palnika przez 10 minut. Cały czas bez przykrywki.',
      'Po 10 minutach na patelnię wyłóż też kawałki kurczaka w przyprawie curry, obrany i pokrojony w plasterki kawałek imbiru oraz obrane i pokrojone w plasterki ząbki czosnku. Ponownie wymieszaj całość i smaż przez kolejne pięć minut. Ta sama moc i również bez przykrywki.',
      'Na koniec wlej jeszcze pół szklanki bulionu drobiowego (może być też warzywny lub w ostateczności sama woda). Dodaj jedną szklankę mleczka kokosowego (im gęstsze tym lepiej) oraz dwie pełne łyżki pasty curry. Pastę możesz zastąpić też dwiema płaskimi łyżkami przyprawy curry w proszku.',
      'Wymieszaj całe danie i podgrzewaj ostatnie pięć minut.',
    ],
  };

  get stars(): string {
    return '★'.repeat(this.recipe.rating) + '☆'.repeat(5 - this.recipe.rating);
  }
}
