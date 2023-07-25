import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private _racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._racesInstances += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  createdRacesInstances(): number {
    return this._racesInstances;
  }
}
