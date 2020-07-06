'use strict';

class GameRule {
  // define valid moves, stones removal quantity
  // considering this array in ascendent order for convinience
  totalValidMoves = [2, 3, 5];
  validMoves = [];

  /** This method adjusts the valid moves when the number of stones becomes less then the major number of valid moves, or less or equal 7
   ** due to the valid moves and the challenge rules that imposed no failling moves
  */
  adjustValidMove(stones) {
    this.validMoves = [];

    for (let i = 0; i < this.totalValidMoves.length; i++) {
      if (stones - this.totalValidMoves[i] <= 1) {
        this.validMoves.push(this.totalValidMoves[i]);
        return true;
      }
    }

    this.validMoves = this.totalValidMoves; //

    return true;
  }
}

module.exports = GameRule;
