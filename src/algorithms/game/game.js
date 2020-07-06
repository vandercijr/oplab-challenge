'use strict';

/**
 * File: gameofstones.js
 * Author: Vanderci Curvelo Junior
 * Description: implementation of gameofstones game challenge from https://www.hackerrank.com/challenges/game-of-stones-1/problem'
 * port from mine C++ implementation
 * run on nodejs
 * Data: 05/06/2020
 */

const Player = require('./player');

/**
* I've decide to use events here in order to provide any interface get the results from the game.
*/
const events = require('events');

const game = (stones) =>  {
  const eventEmitter = new events.EventEmitter();
  const p1 = new Player('First');
  const p2 = new Player('Second');

  const players = [];
  let   turn = 1;

  players.push(p1);
  players.push(p2);

  const nplayers = players.length;

  const run = () => {
    while (stones > 1) {
      eventEmitter.emit('game.turn', {
        turn: turn
      });

      for (let i = 0; i < nplayers; i++) {
        const _move = players[i].move(stones);

        eventEmitter.emit('player.move', {
          name: players[i].name,
          move: _move
        });

        stones -= _move;

        eventEmitter.emit('game.stone', {
          stones: stones
        });

        if (stones <= 1) {
          eventEmitter.emit('game.winner', {
            name: players[i].name
          });
          return true;
        }
      }

      turn++;
    }
  };

  return {
    run: run,
    events: eventEmitter
  };
};

module.exports = game;
