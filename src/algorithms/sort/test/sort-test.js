'use strict';
/**
 * Arquivo: sort-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test for the file : 'sort.js'
 * Data: 23/05/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#expect
 *
 */

const  chai = require('chai');

const { bubbleSort } = require('../sort');

const  expect = chai.expect;

//names generated from ttps://www.name-generator.org.uk
//names generated from ttps://www.name-generator.org.uk
const  array_input = [
  'Paris Cutler',
  'Gideon Stibbons',
  'Cordelia Holt',
  'Randall Ridcully',
  'Nadia Drake',
  'Ruki Imperial',
  'Tamika Konstan',
  'Faust Rune',
  'Ponder Weasley',
  'Ommin Voldemort'
];

const  asorted_array = [
  'Cordelia Holt',
  'Faust Rune',
  'Gideon Stibbons',
  'Nadia Drake',
  'Ommin Voldemort',
  'Paris Cutler',
  'Ponder Weasley',
  'Randall Ridcully',
  'Ruki Imperial',
  'Tamika Konstan'
];

const  dsorted_array = [
  'Tamika Konstan',
  'Ruki Imperial',
  'Randall Ridcully',
  'Ponder Weasley',
  'Paris Cutler',
  'Ommin Voldemort',
  'Nadia Drake',
  'Gideon Stibbons',
  'Faust Rune',
  'Cordelia Holt'
];

describe('Test some sort algorithms', function() {
  it('Should sort an array using ascendent BubbleSort algorithm', function() {
    bubbleSort(array_input);
    expect(array_input).to.deep.equal(asorted_array);
  });

  it('Should sort an array using descendent BubbleSort algorithm', function() {
    bubbleSort(array_input, 'desc');
    expect(array_input).to.deep.equal(dsorted_array);
  });
});
