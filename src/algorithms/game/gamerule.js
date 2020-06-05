'use strict';

class GameRule {
  // define valid moves, stones removal quantity
  // considering this array in ascendent order for convinience
  totalValidMoves = [2, 3, 5];
  validMoves = [];

  adjustValidMove(stones) {
    this.validMoves = [];

    while (GameOfStonesRule.validMoves[GameOfStonesRule.validMoves.length-1] > stones)
      GameOfStonesRule.validMoves.splice(GameOfStonesRule.validMoves.length-1);


    return true;
  }
}

module.exports = GameRule;
