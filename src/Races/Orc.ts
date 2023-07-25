import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  static _orcInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._orcInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._orcInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
