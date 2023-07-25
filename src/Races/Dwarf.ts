import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  static _dwarfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._dwarfInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._dwarfInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
