export enum Unit {
  Piece = 'piece',
  Gram = 'gram',
  Cup = 'cup',
  TableSpoon = 'tbsp',
  TeaSpoon = 'tsp',
  Centimeters = 'cm',
  Package = 'package',
  ToTaste = 'to taste',
}

const pluralUnits = [Unit.Piece, Unit.Gram, Unit.Cup, Unit.Package];

export const isPlural = (unit: Unit): boolean => {
  return pluralUnits.includes(unit);
};
