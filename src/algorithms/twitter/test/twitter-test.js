'use strict';
/**
 * File: twitter-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test for the file : 'twitter.js'
 * Data: 30/05/2020
 *
 * Documentation: http://chaijs.com/guide/styles/#expect
 *
 */

const chai = require('chai');

const Twitter = require('../twitter');
const path  = require('path');
const dotenv  = require('dotenv');

dotenv.config({path: path.resolve(__dirname + '/../../../../.env') });

const expect = chai.expect;

describe('Test tweets from twitter Api', function() {
  it('Give a string search five tweets with this word', function() {
    const search_word = 'Development';
    const number_of_tweets = 5;

    const twitter_response = Twitter({
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.TOKEN_KEY,
      access_token_secret: process.env.TOKEN_SECRET,
    },
    search_word,
    number_of_tweets
    );

    twitter_response
      .then((res) =>  {
        expect(res.statusest).to.be.a('string');
      })
      .catch((err)  =>  {
        console.log(err);
      });
  });
});
