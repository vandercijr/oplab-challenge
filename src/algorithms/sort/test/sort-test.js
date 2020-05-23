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
const  array_input = [];

const  asorted_array = [];

const  dsorted_array = [];

describe('Test some sort algorithms', ()  =>  {
  it('Should sort an array using ascendent BubbleSort algorithm', ()  =>  {
    bubbleSort(array_input);
    expect(array_input).to.deep.equal(asorted_array);
  });

  it('Should sort an array using descendent BubbleSort algorithm', () =>  {
    bubbleSort(array_input, 'desc');
    expect(array_input).to.deep.equal(dsorted_array);
  });
});
