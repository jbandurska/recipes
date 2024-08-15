export enum Unit {
  Piece = 'piece',
  Gram = 'gram',
  Kilogram = 'kilogram',
  Cup = 'cup',
  TableSpoon = 'tbsp',
  TeaSpoon = 'tsp',
  Centimeter = 'cm',
  Milliliter = 'ml',
  Liter = 'l',
  Package = 'package',
  ToTaste = 'to taste',
  Pinch = 'pinch',
  Handful = 'handful',
  Serving = 'serving',
}

const pluralUnits = [
  Unit.Piece,
  Unit.Kilogram,
  Unit.Gram,
  Unit.Cup,
  Unit.Package,
  Unit.Pinch,
  Unit.Handful,
  Unit.Serving,
];

export const isPlural = (unit: Unit): boolean => {
  return pluralUnits.includes(unit);
};
