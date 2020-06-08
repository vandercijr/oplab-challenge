//game console runner 

const Game = require('./game/game.js');
const argv = process.argv.slice(2);

(() =>  {
  if (!(argv[0] > 0)) {
    console.log('Inválid Parameter. Should be a number greated than 0');
    return false;
  }

  if (parseInt(argv[0]) != argv[0]) {
    console.log('Inválid Parameter. Should be a integer number');
    return false;
  }

  const game = Game(parseInt(argv[0]));

  game.events.on('game.start', (e) =>  {
    console.log('Game started');
  });

  game.events.on('game.turn', (e) =>  {
    console.log('Turn #' + e.turn);
  });

  game.events.on('game.stone', (e) =>  {
    console.log(e.stones + ' stone(s) left');
  });

  game.events.on('player.move', (e) =>  {
    console.log('Player ' + e.name + ' removed ' + e.move + ' stones');
  });

  game.events.on('game.winner', (e) =>  {
    console.log('The winner is ' + e.name);
  });

  game.run();
})();
