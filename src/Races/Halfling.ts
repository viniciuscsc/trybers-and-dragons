import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 80;
  static _halflingInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._halflingInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._halflingInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}