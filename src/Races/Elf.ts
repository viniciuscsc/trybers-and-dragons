import Race from './Race';

export default class Elf extends Race {
  protected _maxLifePoints = 99;
  static _elfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._elfInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._elfInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
