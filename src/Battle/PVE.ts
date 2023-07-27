import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _enemies: Array<Fighter | SimpleFighter>;

  constructor(player1: Fighter, enemies: Array<Fighter | SimpleFighter>) {
    super(player1);
    this._enemies = enemies;
  }

  fight(): number {
    const player1WinsAllBattles = this._enemies.every((enemy) => {
      while (this._player1.lifePoints > 0 && enemy.lifePoints > 0) {
        this._player1.attack(enemy);
        enemy.attack(this._player1);
      }
      return this._player1.lifePoints > 0;
    });
    return player1WinsAllBattles ? 1 : -1;
  }
}
