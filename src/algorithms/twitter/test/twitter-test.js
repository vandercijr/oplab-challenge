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

const chai = require('chai');

const Twitter = require('../twitter');

const expect = chai.expect;

describe('Test tweets from twitter Api', () => {
  it('Give a string search five tweets with this word', () =>  {
    const twitter = Twitter("Development");
    twitter.events.on('tweet', function (e) {
      expect(e.tweet.text).to.be.a('string');
    });
  });
});
