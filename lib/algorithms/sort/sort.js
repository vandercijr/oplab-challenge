'use strict';
/**
 * Arquivo: sort.js
 * Author: Vanderci Curvelo Junior
 * Description: implementation of some sort algorithms'
 * Data: 23/05/2020
 *
 */

var swap = function swap(swap_array, i, j) {
  var auxiliar = swap_array[i];
  swap_array[i] = swap_array[j];
  swap_array[j] = auxiliar;
};

var bubbleSort = function bubbleSort(array_input, order) {
  var asize = array_input.length;

  if (asize > 2) {
    var found = true;

    while (found) {
      found = false;

      for (var i = 0; i < asize; i++) {
        var a = order === 'desc' ? i + 1 : i,
            b = order === 'desc' ? i : i + 1;
        var shouldSwap = array_input[a] > array_input[b];

        if (shouldSwap) {
          found = true;
          swap(array_input, a, b);
        }
      }
    }
  }
};

module.exports = {
  bubbleSort: bubbleSort
};