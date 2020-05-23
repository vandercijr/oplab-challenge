'use strict';
/**
 * Arquivo: sort.js
 * Author: Vanderci Curvelo Junior
 * Description: implementation of some sort algorithms'
 * Data: 23/05/2020
 *
 */
 const swap = (swap_array, i, j) =>  {
   const auxiliar = swap_array[i];

   swap_array[i] = swap_array[j];
   swap_array[j] = auxiliar;
 };

 const bubbleSort =  (array_input, order)  =>  {
   const asize = array_input.length;

   if (asize > 2) {
     let found = true;

     while (found) {
       found = false;

       for (let i = 0; i < asize; i++) {
         const a = order === 'desc' ? i + 1 : i,
               b = order === 'desc' ? i : i + 1;

         const shouldSwap = array_input[a] > array_input[b];

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
