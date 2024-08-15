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
        name: 'chicken breast',
        quantity: 650,
        unit: Unit.Gram,
      },
      {
        name: 'red bell pepper',
        quantity: 1,
        unit: Unit.Piece,
      },
      {
        name: 'onion',
        quantity: 1,
        unit: Unit.Piece,
      },
      {
        name: 'carrot',
        quantity: 1,
        unit: Unit.Piece,
      },
      {
        name: 'garlic cloves',
        quantity: 3,
        unit: Unit.Piece,
      },
      {
        name: 'fresh ginger',
        quantity: 4,
        unit: Unit.Centimeters,
      },
      {
        name: 'coconut milk',
        quantity: 1,
        unit: Unit.Cup,
      },
      {
        name: 'chicken broth',
        quantity: 0.5,
        unit: Unit.Cup,
      },
      {
        name: 'olive oil',
        quantity: 4,
        unit: Unit.TableSpoon,
      },
      {
        name: 'mild curry paste',
        quantity: 2,
        unit: Unit.TableSpoon,
      },
      {
        name: 'curry',
        quantity: 1,
        unit: Unit.TableSpoon,
      },
      {
        name: 'rice',
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
  {
    title: 'Creamy Vegan One Pot Pasta (Asian Style)',
    rating: 4,
    photo:
      'https://veganheaven.org/wp-content/uploads/2017/02/Creamy-Vegan-One-Pot-Pasta-4.jpg',
    ingredients: [
      { name: 'onion', quantity: 1, unit: Unit.Piece },
      { name: 'garlic cloves', quantity: 2, unit: Unit.Piece },
      { name: 'zucchini', quantity: 1, unit: Unit.Piece },
      { name: 'red bell pepper', quantity: 1, unit: Unit.Piece },
      { name: 'pasta', quantity: 4.5, unit: Unit.Cup },
      { name: 'red curry paste', quantity: 1.5, unit: Unit.TeaSpoon },
      { name: 'diced tomatoes (canned)', quantity: 3, unit: Unit.Cup },
      { name: 'coconut milk', quantity: 1, unit: Unit.Cup },
      { name: 'peas', quantity: 0.5, unit: Unit.Cup },
      { name: 'cherry tomatoes', quantity: 0.5, unit: Unit.Cup },
      { name: 'salt', quantity: 0, unit: Unit.ToTaste },
      { name: 'black pepper', quantity: 0, unit: Unit.ToTaste },
      { name: 'fresh lemon juice', quantity: 1, unit: Unit.TeaSpoon },
    ],
    steps: [
      'Heat some oil in a large pot and sauté the onion for about 2-3 minutes. Then add the garlic, the zucchini, and the red bell pepper and cook for 2 more minutes.',
      'Add the remaining ingredients except for the cherry tomatoes. Cook for about 15 minutes (uncovered and on medium heat, then add the cherry tomatoes and cook for two more minutes. Season with salt and black pepper.',
    ],
  },
];
