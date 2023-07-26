import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _enemies: Array<Fighter | SimpleFighter>;

  constructor(player1: Fighter, enemies: Array<Fighter | SimpleFighter>) {
    super(player1);
    this._enemies = enemies;
  }

  // battleWinner = 1, se player1 vencer
  // battleWinner = -1, se enemies vencer
  fight(): number {
    this._enemies.forEach((enemy) => {
      while (this._player1.lifePoints > 0 && enemy.lifePoints > 0) {
        this._player1.attack(enemy);
        enemy.attack(this._player1);
      }
      const battleWinner = this._player1.lifePoints === -1 ? -1 : 1;
      return battleWinner;
    });
    return 1;
  }
}
