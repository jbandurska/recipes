import { Injectable } from '@angular/core';
import { Unit } from '../enums/unit.enum';
import { IngredientBase } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  private readonly pluralUnits = [
    Unit.Piece,
    Unit.Kilogram,
    Unit.Gram,
    Unit.Cup,
    Unit.Package,
    Unit.Pinch,
    Unit.Handful,
    Unit.Serving,
  ];

  constructor() {}

  public getQuantityString(base: IngredientBase): string {
    const quantity = Math.round(base.quantity * 100) / 100;

    return `${quantity ? quantity + ' ' : ''}${base.unit}${
      this.isPlural(base.unit) && quantity > 1 ? 's' : ''
    }`;
  }

  private isPlural = (unit: Unit): boolean => {
    return this.pluralUnits.includes(unit);
  };
}
