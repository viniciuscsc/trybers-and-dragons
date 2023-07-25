import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 80;
  static _elffInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._elffInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._elffInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}