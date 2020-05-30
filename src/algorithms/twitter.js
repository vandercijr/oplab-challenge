const Twitter = require('./twitter/twitter.js');
const path  = require('path');
const dotenv  = require('dotenv');
const argv = process.argv.slice(2);

(() =>  {
  if (!(argv[0] !== '')) {
    console.log('Inválid Parameter. Should be diferent from blank');
    return false;
  }

  if (!(argv[1] > 0)) {
    console.log('Inválid Parameter. Should be greater than zero');
    return false;
  }

  dotenv.config({path: path.resolve(__dirname + '/../../.env') });

  const twitter_response = Twitter({
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.TOKEN_KEY,
      access_token_secret: process.env.TOKEN_SECRET,
    },
    argv[0],
    argv[1]
  );

 twitter_response
  .then((res) =>  {
    console.log(res);
  })
  .catch((err)  =>  {
    console.log(err);
  })
})();
