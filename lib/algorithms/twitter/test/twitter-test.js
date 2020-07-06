'use strict';
/**
 * Arquivo: twitter-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test for the file : 'twitter.js'
 * Data: 30/05/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#expect
 *
 */

var chai = require('chai');

var Twitter = require('../twitter');

var path = require('path');

var dotenv = require('dotenv');

dotenv.config({
  path: path.resolve(__dirname + '/../../../../.env')
});
var expect = chai.expect;
describe('Test tweets from twitter Api', function () {
  it('Give a string search five tweets with this word', function () {
    var search_word = 'Development';
    var number_of_tweets = 5;
    var twitter_response = Twitter({
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.TOKEN_KEY,
      access_token_secret: process.env.TOKEN_SECRET
    }, search_word, number_of_tweets);
    twitter_response.then(function (res) {
      expect(res.statusest).to.be.a('string');
    })["catch"](function (err) {
      console.log(err);
    });
  });
});