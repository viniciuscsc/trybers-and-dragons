import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  static _warriorInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Warrior._warriorInstances += 1;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return this._warriorInstances;
  }
}
