import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player2: Fighter | SimpleFighter;

  constructor(
    player1: Fighter | SimpleFighter,
    player2: Fighter | SimpleFighter,
  ) {
    super(player1);
    this._player2 = player2;
  }

  fight(): number {
    while (this._player2.lifePoints > 0 && this._player1.lifePoints > 0) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    }
    // battleWinner = 1, se o player1 vencer
    // battleWinner = -1, se o player2 vencer
    const battleWinner = this._player1.lifePoints === -1 ? -1 : 1;
    return battleWinner;
  }
}
