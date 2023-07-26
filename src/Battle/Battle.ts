import Fighter, { SimpleFighter } from '../Fighter';

abstract class Battle {
  constructor(protected _player1: Fighter | SimpleFighter) { }

  // Should return 1 if player wins, -1 otherwise
  fight(): number {
    return this._player1.lifePoints === -1 ? -1 : 1;
  }
}

export default Battle;
