import { Unit } from '../enums/unit.enum';
import { Recipe } from '../models/recipe.model';

export const RECIPES: Recipe[] = [
  {
    title: 'Kurczak Curry',
    rating: 5,
    vegetarian: false,
    prepTime: 70,
    link: 'https://aniagotuje.pl/przepis/kurczak-curry',
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
        unit: Unit.Centimeter,
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
        quantity: 3,
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
    title: 'Creamy Vegan One Pot Pasta',
    rating: 4,
    vegetarian: true,
    prepTime: 45,
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
      { name: 'pepper', quantity: 0, unit: Unit.ToTaste },
      { name: 'fresh lemon juice', quantity: 1, unit: Unit.TeaSpoon },
    ],
    steps: [
      'Heat some oil in a large pot and sauté the onion for about 2-3 minutes. Then add the garlic, the zucchini, and the red bell pepper and cook for 2 more minutes.',
      'Add the remaining ingredients except for the cherry tomatoes. Cook for about 15 minutes (uncovered and on medium heat, then add the cherry tomatoes and cook for two more minutes. Season with salt and black pepper.',
    ],
  },
  {
    title: 'Red Lentil Soup',
    rating: 4,
    vegetarian: true,
    prepTime: 70,
    photo:
      'https://static01.nyt.com/images/2019/01/17/dining/mc-red-lentil-soup/mc-red-lentil-soup-threeByTwoMediumAt2X-v2.jpg?width=1280&quality=75&auto=webp',
    ingredients: [
      { name: 'olive oil', quantity: 3, unit: Unit.TableSpoon },
      { name: 'large onion', quantity: 1, unit: Unit.Piece },
      { name: 'garlic cloves', quantity: 2, unit: Unit.Piece },
      { name: 'tomato paste', quantity: 1, unit: Unit.TableSpoon },
      { name: 'ground cumin', quantity: 1, unit: Unit.TeaSpoon },
      { name: 'salt', quantity: 0, unit: Unit.ToTaste },
      { name: 'pepper', quantity: 0, unit: Unit.ToTaste },
      { name: 'chili powder or ground cayenne', quantity: 1, unit: Unit.Pinch },
      {
        name: 'chicken or vegetable broth',
        quantity: 1,
        unit: Unit.Liter,
      },
      { name: 'red lentils', quantity: 1, unit: Unit.Cup },
      { name: 'large carrot', quantity: 1, unit: Unit.Piece },
      { name: 'lemon juice', quantity: 0.5, unit: Unit.Piece },
      { name: 'fresh cilantro', quantity: 3, unit: Unit.TableSpoon },
    ],
    steps: [
      'In a large pot, heat 3 tablespoons oil over high until hot and shimmering. Add onion and garlic, and sauté until golden, about 4 minutes.',
      'Stir in tomato paste, cumin, ¼ teaspoons each salt and black pepper and the chili powder, and sauté for 2 minutes longer.',
      'Add broth, 2 cups water, lentils and carrot. Bring to a simmer, then partly cover pot and turn heat to medium-low. Simmer until lentils are soft, about 30 minutes. Taste and add salt if necessary.',
      'Using an immersion or regular blender or a food processor, purée half the soup, then add it back to pot. The soup should be somewhat chunky.',
      'Reheat soup if necessary, then stir in lemon juice and cilantro. Serve soup drizzled with good olive oil and dusted lightly with chili powder, if desired.',
    ],
  },
  {
    title: 'Kotlety z ziemniakami i mizerią',
    rating: 5,
    vegetarian: false,
    prepTime: 70,
    photo:
      'https://cdn.galleries.smcloud.net/t/galleries/gf-FEJW-RRJp-UVPg_schabowe-z-koscia-664x442-nocrop.jpg',
    ingredients: [
      { name: 'chicken breast', quantity: 500, unit: Unit.Gram },
      { name: 'potatos', quantity: 6, unit: Unit.Piece },
      { name: 'breadcrumbs', quantity: 100, unit: Unit.Gram },
      { name: 'eggs', quantity: 2, unit: Unit.Piece },
      { name: 'salt', quantity: 0, unit: Unit.ToTaste },
      { name: 'pepper', quantity: 0, unit: Unit.ToTaste },
      { name: 'cucumber', quantity: 1, unit: Unit.Piece },
      { name: 'yogurt', quantity: 1, unit: Unit.Cup },
    ],
    steps: [
      'Obierz i zagotuj ziemniaki. Nie zapomnij ich posolić.',
      'Pokrój kurczaka. Przypraw go wybranymi przyprawami i obtocz w mące, jajku i bułce tartej. Usmaż na patelni.',
      'Pokrój ogórka i przygotuj z niego mizerię.',
    ],
  },
  {
    title: 'Sos musztardowy',
    rating: 3,
    vegetarian: true,
    prepTime: 70,
    photo:
      'https://static.fajnegotowanie.pl/media/uploads/media_image/original/przepis/1439/sos-musztardowy.jpg',
    ingredients: [
      {
        name: 'mustard',
        description: 'sarepska lub Dijon',
        quantity: 2,
        unit: Unit.TableSpoon,
      },
      {
        name: 'butter',
        quantity: 2,
        unit: Unit.TableSpoon,
      },
      {
        name: 'flour',
        quantity: 1,
        unit: Unit.TableSpoon,
      },
      {
        name: 'vegetable broth',
        quantity: 1,
        unit: Unit.Cup,
      },
      {
        name: 'pepper',
        quantity: 1,
        unit: Unit.Pinch,
      },
      {
        name: 'potatos',
        quantity: 6,
        unit: Unit.Piece,
      },
    ],
    steps: [
      'Ugotuj ziemniaki. Nie zapomnij ich posolić!',
      'W małym rondelku lub garnuszku umieść dwie spore łyżki prawdziwego masła. Ustaw odrobinę wyższą niż mała moc palnika i zacznij powoli roztapiać masło. Wsyp łyżkę mąki pszennej. Niech będzie to nie płaska i nie za czubata łyżka mąki. Smaż tak chwilę masełko z mąką na lekką zasmażkę.',
      'Po chwili wlej też 250 ml, czyli jedną szklankę bulionu warzywnego lub też drobiowego. Od razu możesz też dodać dwie łyżki ostrej musztardy i szczyptę pieprzu. Zwiększ moc palnika i ciągle mieszając rozcieraj i łącz ze sobą składniki sosu. Na początku może Ci się wydawać, że sos będzie za rzadki i nie wygląda za ciekawie, ale z minuty na minutę będzie się robił coraz gładszy i gęstszy.. zaufaj mi.',
    ],
  },
  {
    title: 'Tofu Katsu Noodle Bowl',
    rating: 3,
    vegetarian: true,
    prepTime: 70,
    photo:
      'https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1024/https://woonheng.com/wp-content/uploads/2020/06/Tofu-Katsu-Noodle-5-1-1024x1024.jpg',
    ingredients: [
      { name: 'noodles', quantity: 3, unit: Unit.Serving },
      { name: 'tofu', quantity: 397, unit: Unit.Gram },
      {
        name: 'blanched veggies (i.e. bok choy)',
        quantity: 3,
        unit: Unit.Serving,
      },
      { name: 'oil', quantity: 1, unit: Unit.Serving },
      { name: 'flour', quantity: 0.75, unit: Unit.Cup },
      { name: 'cold water', quantity: 0.5, unit: Unit.Cup },
      { name: 'salt', quantity: 0.5, unit: Unit.TeaSpoon },
      { name: 'white pepper', quantity: 0, unit: Unit.ToTaste },
      { name: 'panko breadcrumbs', quantity: 45, unit: Unit.Gram },
      { name: 'soy sauce/tamari', quantity: 3, unit: Unit.TableSpoon },
      { name: 'vegan "oyster" sauce', quantity: 2, unit: Unit.TableSpoon },
      {
        name: 'dark soy sauce (thick version)',
        quantity: 1,
        unit: Unit.TableSpoon,
      },
      { name: 'toasted sesame oil', quantity: 1, unit: Unit.TableSpoon },
      { name: 'white pepper', quantity: 0, unit: Unit.ToTaste },
    ],
    steps: [
      'Remove tofu from its packaging and drain to discard liquid. Press tofu block in between towels to remove moisture. Divide tofu into 3 large rectangle block and season with a little salt.',
      "For the batter: whisk together all-purpose flour, salt, and white pepper until all incorporated in a large shallow plate. Add the water and stir to combine. The batter's consistency should be thick like a pancake batter, if not, add more flour or vice versa. Dredge tofu in the batter, shake off excess, then coat with panko breadcrumbs. Lightly press breadcrumbs into the tofu.",
      'Heat up a non-stick pan with a thin layer of oil (enough to cover 1/3 of the tofu height). Then slowly place tofu in and shallow pan-fry until golden brown on both sides. Try not to flip until one side is fully cooked. Remove and place tofu on a paper towel to absorb excess oil.',
      "To make the sauce, place all sauce ingredients in a bowl and mix until well combined. Cook noodles based on package's instructions. Toss noodles with sauce until all incorporated. Season accordingly, if needed.",
      'Serve tofu Katsu with noodles and blanched veggies.',
    ],
  },
  {
    title: 'Easy Carbonara',
    rating: 3,
    vegetarian: false,
    prepTime: 70,
    photo:
      'https://img.jamieoliver.workers.dev/images/cq7w2e71/production/701783bf859090eea919ec0fc2a4c58b148c9b67-958x1280.jpg/105104800?rect=0,2,958,1277&w=1920&h=2560&fm=webp&q=80&fit=crop&auto=format',
    ingredients: [
      { name: 'spaghetti', quantity: 150, unit: Unit.Gram },
      { name: 'bacon', quantity: 0.5, unit: Unit.Piece },
      { name: 'olive oil', quantity: 0, unit: Unit.ToTaste },
      { name: 'eggs', quantity: 2, unit: Unit.Piece },
      { name: 'Parmesan', quantity: 30, unit: Unit.Gram },
    ],
    steps: [
      'Cook the pasta in a pan of boiling salted water according to the packet instructions.',
      'Slice the bacon and place in a non-stick frying pan on a medium heat with half a tablespoon of olive oil and a really good pinch of black pepper. Leave it to get super-golden and crispy, tossing occasionally, then turn off the heat.',
      'Meanwhile, beat the eggs in a bowl, then finely grate in the Parmesan and mix well.',
      'Use tongs to transfer your pasta straight into the pan and toss with the bacon.',
      'Pour the Parmesan eggs into the pan, and keep everything moving, loosening with splashes of the pasta cooking water until you have a silky sauce. Make sure the pan isn’t too hot otherwise the eggs will scramble.',
      'Plate up the pasta, and finish with an extra grating of Parmesan.',
    ],
  },
  {
    title: 'Indian Butter Chickpeas',
    rating: 4,
    vegetarian: true,
    prepTime: 50,
    photo:
      'https://hips.hearstapps.com/hmg-prod/images/del121223-indian-butter-chickpeas-008-ab-hi-res-lead-6596b3d0c388f.jpg?resize=1200:*',
    ingredients: [
      { name: 'butter', quantity: 4, unit: Unit.TableSpoon },
      { name: 'onion', quantity: 1, unit: Unit.Piece },
      { name: 'kosher salt', quantity: 1, unit: Unit.TeaSpoon },
      { name: 'tomato paste', quantity: 0.5, unit: Unit.Cup },
      { name: 'serrano chile', quantity: 0.5, unit: Unit.Piece },
      { name: 'fresh ginger', quantity: 1, unit: Unit.TableSpoon },
      { name: 'chickpeas', quantity: 2, unit: Unit.Cup },
      { name: 'baking soda', quantity: 0.125, unit: Unit.TeaSpoon },
      { name: 'garam masala', quantity: 1, unit: Unit.TeaSpoon },
      { name: 'ground cumin', quantity: 1, unit: Unit.TeaSpoon },
      { name: 'paprika', quantity: 1, unit: Unit.TeaSpoon },
      { name: 'heavy cream', quantity: 1, unit: Unit.Cup },
      { name: 'fresh cilantro', quantity: 0.25, unit: Unit.Cup },
      { name: 'rice', quantity: 2, unit: Unit.Package },
    ],
    steps: [
      'In a large, high-sided skillet over medium heat, melt butter. Add onion and 1/2 teaspoon salt and cook, stirring occasionally, until softened, about 7 minutes. Add tomato paste and cook, stirring constantly, until darkened, 4 to 5 minutes. Add chile and ginger and cook, stirring, until fragrant and tomato paste is starting to stick to pan, about 1 minute more.',
      'Add chickpeas and baking soda and stir to combine, then add garam masala, cumin, and chili powder and cook, stirring frequently, until fragrant and incorporated, about 30 seconds.',
      'Stir in cream, fenugreek (if using), 1/2 teaspoon salt, and 1 cup water. Bring to a simmer over medium-high heat, then reduce heat to low and continue to simmer, stirring occasionally, until sauce is reduced, 10 to 15 minutes.',
      'Divide rice among bowls or plates. Season chickpeas with salt, if needed, then top with cilantro. Spoon chickpeas over rice.',
    ],
  },
  {
    title: 'Sweet and Sour Chicken',
    rating: 5,
    vegetarian: false,
    prepTime: 70,
    photo:
      'https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Sweet-and-sour-chicken-tall-FS-0834.webp',
    ingredients: [
      { name: 'oil', quantity: 6, unit: Unit.TableSpoon },
      { name: 'eggs', quantity: 2, unit: Unit.Piece },
      { name: 'cornflour', quantity: 3, unit: Unit.TableSpoon },
      { name: 'flour', quantity: 90, unit: Unit.Gram },
      { name: 'salt', quantity: 0.5, unit: Unit.TeaSpoon },
      { name: 'pepper', quantity: 0.5, unit: Unit.TeaSpoon },
      { name: 'garlic salt', quantity: 0.5, unit: Unit.TeaSpoon },
      { name: 'paprika', quantity: 2, unit: Unit.TeaSpoon },
      { name: 'chicken breast', quantity: 3, unit: Unit.Piece },
      { name: 'onion', quantity: 1, unit: Unit.Piece },
      { name: 'red bell pepper', quantity: 1, unit: Unit.Piece },
      { name: 'green bell pepper', quantity: 1, unit: Unit.Piece },
      { name: 'garlic cloves', quantity: 2, unit: Unit.Piece },
      { name: 'fresh ginger', quantity: 1, unit: Unit.TeaSpoon },
      { name: 'ketchup', quantity: 150, unit: Unit.Milliliter },
      { name: 'malt vinegar', quantity: 2, unit: Unit.TableSpoon },
      { name: 'brown sugar', quantity: 6, unit: Unit.TableSpoon },
      { name: 'canned pineapple', quantity: 475, unit: Unit.Gram },
      { name: 'rice', quantity: 3, unit: Unit.Package },
      { name: 'sesame seeds', quantity: 1, unit: Unit.TeaSpoon },
    ],
    steps: [
      'Heat 5 tbsp of oil in a wok or large frying pan until very hot.',
      'Whilst the oil is heating, place the egg in one shallow bowl and the cornflour in another shallow bowl. Add the flour, salt, pepper, garlic salt and paprika to another shallow bowl and mix together.',
      "Dredge the chicken in the cornflour, then dip it in the egg (make sure all of the chicken is covered in egg wash), and finally dredge it in the seasoned flour. Add to the wok and cook on a high heat for 6-7 minutes, turning two or three times during cooking, until well browned. You may need to cook in two batches (I find I can do it in one batch so long as it's no more than 3 chicken breasts). Remove from the pan and place in a bowl lined with kitchen towels.",
      'Whilst the chicken is cooking, you can start on your sauce. Add the oil to a large frying pan/skillet, heat it up on a medium-to-high heat and add in the onions. Cook for 3 minutes, stirring every now and then, until the onions start to go translucent.',
      'Add the peppers and cook for a further minute.',
      'Add in the garlic and ginger and cook for another minute. Add the tomato ketchup, vinegar, dark brown sugar, and the tinned pineapple (including the juice) and stir. Bring to the boil, and then turn down the heat and let it bubble stirring every so often until slightly thickened.',
      'Transfer the cooked crispy chicken to the pan with the sauce and toss to coat.',
      'Serve with boiled or fried rice and a sprinkling of sesame seeds.',
    ],
  },
  {
    title: 'Szpinak',
    rating: 3,
    vegetarian: true,
    prepTime: 70,
    photo: '',
    ingredients: [],
    steps: [],
  },
  {
    title: 'Chinkali',
    rating: 5,
    vegetarian: false,
    prepTime: 70,
    photo:
      'https://cdn.aniagotuje.com/pictures/articles/2023/10/50592283-v-1500x1500.jpg',
    link: 'https://aniagotuje.pl/przepis/chinkali',
    ingredients: [],
    steps: [],
  },
  {
    title: 'Napoli',
    rating: 3,
    vegetarian: true,
    prepTime: 40,
    photo:
      'https://cdn.aniagotuje.com/pictures/articles/2022/08/31579351-v-1500x1500.jpg',
    ingredients: [
      { name: 'spaghetti', quantity: 300, unit: Unit.Gram },
      { name: 'tomatoes', quantity: 1200, unit: Unit.Gram },
      { name: 'garlic cloves', quantity: 2, unit: Unit.Piece },
      { name: 'olive oil', quantity: 3, unit: Unit.TableSpoon },
      { name: 'fresh basil', quantity: 1, unit: Unit.Handful },
      { name: 'salt', quantity: 1, unit: Unit.TeaSpoon },
      { name: 'pepper', quantity: 0.33, unit: Unit.TeaSpoon },
      { name: 'Parmesan', quantity: 0, unit: Unit.ToTaste },
    ],
    steps: [
      'Nagrzej szerszą patelnię z grubym dnem (wyższa niż średnia moc palnika). Wlej do niej około 3 łyżki oliwy, a następnie dodaj też obrane i przepuszczone przez praskę dwa ząbki czosnku. Po około 10 sekundach na patelnię dodaj pomidory.',
      'Na pomidory wyłóż solidną garść drobniej pokrojonych listków bazylii.',
      'Zmniejsz moc palnika i podsmażaj pomidory przez łącznie około 20-25 minut. Nie przykrywaj patelni, ale co parę minut mieszaj jej zawartość przy pomocy drewnianej łyżki. Na pięć minut przed wyłączeniem sosu dodaj też jedną, płaską łyżeczkę soli i 1/3 łyżeczki pieprzu. Pod koniec sprawdź jeszcze smak sosu i zdecyduj, czy chcesz go jeszcze doprawić, czy może dłużej podsmażyć, by był jeszcze gładszy i gęstszy.',
      'Pod koniec szykowania sosu warto ugotować makaron. Do garnka wlej wodę i zagotuj. Na ugotowanie 300 gramów suchego makaronu potrzebujesz 3 litry wody. Wodę posól dopiero, gdy zacznie się gotować. Do wrzątku wsyp płaską łyżkę soli. W garnku umieść makaron i gotuj al dente.',
      'Gdy makaron zmięknie na tyle, by całkowicie zanurzyć się w wodzie, możesz go zamieszać. Ugotowany powinien być sprężysty, ale nie łamać się po nawinięciu na palec. Makaron spaghetti gotuję zazwyczaj o minutę dłużej, niż zaleca producent na opakowaniu. Ugotowany makaron przełóż na durszlak i od razu na patelnię z gorącym sosem.',
      'Wymieszaj makaron z sosem pomidorowym i od razu nakładaj porcje dania na talerze. Spaghetti Neapolitana można podawać w takiej podstawowej wersji lub udekorować talerz świeżymi listkami bazylii, tartym na małych oczkach lub startym na płatki parmezanem oraz świeżo mielonym pieprzem.',
    ],
  },
  {
    title: 'Rosół',
    rating: 3,
    vegetarian: false,
    prepTime: 70,
    photo:
      'https://cdn.aniagotuje.com/pictures/articles/2020/01/1968771-v-1500x1500.jpg',
    ingredients: [
      { name: 'chicken', quantity: 1.5, unit: Unit.Kilogram },
      { name: 'carrot', quantity: 2, unit: Unit.Piece },
      { name: 'parsley root', quantity: 1, unit: Unit.Piece },
      { name: 'onion', quantity: 1, unit: Unit.Piece },
      { name: 'leek', quantity: 0.5, unit: Unit.Piece },
      { name: 'celery root', quantity: 0.25, unit: Unit.Piece },
      { name: 'garlic cloves', quantity: 2, unit: Unit.Piece },
      { name: 'water', quantity: 2, unit: Unit.Liter },
      { name: 'parsley leaves', quantity: 1, unit: Unit.Handful },
      { name: 'bay leaves', quantity: 2, unit: Unit.Piece },
      { name: 'allspice berries', quantity: 3, unit: Unit.Piece },
      { name: 'black peppercorns', quantity: 1, unit: Unit.TeaSpoon },
      { name: 'salt', quantity: 2, unit: Unit.TeaSpoon },
    ],
    steps: [
      'W garnku zagotuj dwa litry wody. Kurczaka umieść w garnku z wrzątkiem. Ponownie zagotuj wodę z kurczakiem. Po dwóch minutach wylej całą wodę. Wylewasz wówczas mętną wodę ze ściętym białkiem (szumowiny).',
      'W garnku z kurczakiem umieść umyte i obrane warzywa. Marchewki obierz i przekrój na pół. Kawałek pora przekrój wzdłuż. Korzeń pietruszki tylko obierz, zaś kawałek korzenia selera tylko dokładnie umyj. Cebulę przekrój na pół i podpiekaj chwilę na suchej patelni lub nad palnikiem kuchenki gazowej. Tak zarumienioną cebulę również umieść w garnku.',
      'Dodaj też dwa listki laurowe, trzy ziarna ziela angielskiego oraz łyżeczkę ziaren czarnego pieprzu. Na koniec wlej dwa litry świeżej, zimnej wody.',
      'Garnek przykryj przykrywką. Zagotuj rosół a następnie zmniejsz moc palnika do takiej, by rosół tylko lekko mrugał. Gotuj przez godzinę.',
      'Po godzinie gotowania możesz dodać do rosołu: dwa ząbki czosnku (nie każdy je dodaje i możesz je pominąć); natkę pietruszki; świeży lubczyk ogrodowy (w sezonie letnim); dwie łyżeczki soli. Rosół gotuj jeszcze 30 minut.',
      'Sprawdź smak rosołu i zdecyduj, czy chcesz dodać do niego np. więcej soli. Rosół polecam podawać jeszcze gorący z makaronem, zacierkami lub kluskami lanymi. Możesz dodać na talerz siekaną natkę pietruszki.',
    ],
  },
].sort((a, b) => a.title.localeCompare(b.title));
