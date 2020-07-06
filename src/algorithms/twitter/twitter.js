'use strict';
/**
 * File: twitter.js
 * Author: Vanderci Curvelo Junior
 * Description: implementation of a twitter API consumer
 * run on nodejs
 * Data: 30/05/2020
 */

/**
  * tweetReader function
  * Parameters twitter credentials => The token keys to connect to api
  *        search_word => a string to search for
  *        number_of_tweets => an integer greater than 0. Number of tweets returned
*/
const tweetReader = (credentials, search_word, number_of_tweets) =>  {
  const Twitter = require('twitter');

  const client = new Twitter({
    consumer_key: credentials.consumer_key,
    consumer_secret: credentials.consumer_secret,
    access_token_key: credentials.access_token_key,
    access_token_secret: credentials.access_token_secret,
    headers: {
      'Authorization': 'Bearer ' + credentials.access_token_key
    }
  });

  return  client.get('search/tweets', {q: encodeURI(search_word), count: number_of_tweets});

  // return  client.stream('statuses/filter', {filter_level: 'high', track: search_word});
};

module.exports = tweetReader;
