'use strict';
/**
 * Arquivo: gameofstones.js
 * Author: Vanderci Curvelo Junior
 * Description: implementation of gameofstones game challenge from https://www.hackerrank.com/challenges/game-of-stones-1/problem'
 * port from mine C++ implementation
 * run on nodejs
 * Data: 05/06/2020
 */
const Player = require('./player');

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
    }
  };
};

module.exports = game;
