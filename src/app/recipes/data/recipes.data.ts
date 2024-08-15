import { Unit } from '../enums/unit.enum';
import { Recipe } from '../models/recipe.models';

export const RECIPES: Recipe[] = [
  {
    title: 'Kurczak Curry',
    rating: 5,
    photo:
      'https://cdn.aniagotuje.com/pictures/articles/2020/01/1967550-v-1500x1500.jpg',
    ingredients: [
      {
        name: 'pierś z kurczaka',
        quantity: 650,
        unit: Unit.Gram,
      },
      {
        name: 'czerwona papryka',
        quantity: 1,
        unit: Unit.Piece,
      },
      {
        name: 'cebula',
        quantity: 1,
        unit: Unit.Piece,
      },
      {
        name: 'marchewka',
        quantity: 1,
        unit: Unit.Piece,
      },
      {
        name: 'ząbki czosnku',
        quantity: 3,
        unit: Unit.Piece,
      },
      {
        name: 'świeży imbir',
        quantity: 4,
        unit: Unit.Centimeters,
      },
      {
        name: 'mleczko kokosowe',
        quantity: 1,
        unit: Unit.Cup,
      },
      {
        name: 'bulion drobiowy',
        quantity: 0.5,
        unit: Unit.Cup,
      },
      {
        name: 'delikatna oliwa',
        quantity: 4,
        unit: Unit.TableSpoon,
      },
      {
        name: 'łagodna pasta curry',
        quantity: 2,
        unit: Unit.TableSpoon,
      },
      {
        name: 'przyprawa curry',
        quantity: 1,
        unit: Unit.TableSpoon,
      },
      {
        name: 'ryż',
        quantity: 2,
        unit: Unit.Package,
      },
    ],
    steps: [
      'Dwa filety z kurczaka oczyść i pokrój w kostkę/kawałki nie większe niż 2 cm. Do miseczki z gotowym do smażenia mięsem dodaj łyżkę przyprawy curry w proszku. Całość wymieszaj i odstaw.',
      'Ugotuj ryż.',
      'Zacznij nagrzewać dużą patelnię z grubym dnem i z wysokimi rantami. Wlej cztery łyżki delikatnej (nie gorzkiej) oliwy (może być też zwykły olej do smażenia). Po chwili wyłóż też obraną i posiekaną cebulę. Podsmażaj ją na średniej mocy palnika przez pięć minut.',
      'Dodaj obraną i pokrojoną w krótkie i cienkie słupki marchewkę. Zaraz potem dodaj też oczyszczoną z gniazda nasiennego i pokrojoną w kostkę czerwoną paprykę. Wszystko wymieszaj i podsmażaj dalej na średniej mocy palnika przez 10 minut. Cały czas bez przykrywki.',
      'Po 10 minutach na patelnię wyłóż też kawałki kurczaka w przyprawie curry, obrany i pokrojony w plasterki kawałek imbiru oraz obrane i pokrojone w plasterki ząbki czosnku. Ponownie wymieszaj całość i smaż przez kolejne pięć minut. Ta sama moc i również bez przykrywki.',
      'Na koniec wlej jeszcze pół szklanki bulionu drobiowego (może być też warzywny lub w ostateczności sama woda). Dodaj jedną szklankę mleczka kokosowego (im gęstsze tym lepiej) oraz dwie pełne łyżki pasty curry. Pastę możesz zastąpić też dwiema płaskimi łyżkami przyprawy curry w proszku.',
      'Wymieszaj całe danie i podgrzewaj ostatnie pięć minut.',
    ],
  },
];
