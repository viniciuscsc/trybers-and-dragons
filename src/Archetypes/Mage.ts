import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  static _mageInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._mageInstances += 1;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return this._mageInstances;
  }
}
