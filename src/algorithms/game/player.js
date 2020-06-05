'use strict';

const GameRule = require('./gamerule');

class Player  {
  constructor(name) {
    this._name = name;
    this.gameRule = new GameRule();
  }

  move(stones) {
    if (stones === 1) return 0;

    const valid_moves = this.gameRule.validMoves;

    return valid_moves[Math.floor(Math.random() * valid_moves.length)];
  }

  get name() {
    return this._name;
  }
}

module.exports = Player;
