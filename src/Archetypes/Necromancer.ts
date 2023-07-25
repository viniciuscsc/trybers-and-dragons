import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static _necromancerInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._necromancerInstances += 1;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return this._necromancerInstances;
  }
}
