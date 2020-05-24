'use strict'

/**
 * Arquivo: linkedlist-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test for the file : 'linkedlist.js'
 * Data: 24/05/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#expect
 *
 */

 const chai = require('chai');
 const SinglyLinkedList = require('../linkedlist');
 const Node = require('../singlylinkedlistnode');
 const expect = chai.expect;

 const input = ['Name 1','Name 2'];
 //names generated from ttps://www.name-generator.org.uk

 const item1 = new Node(1, input[0]);
 const item2 = new Node(2, input[1]);

 const mylist = new Node(item1._id, item1._data);

 mylist.next = item2;

 describe('Test some linkedlist algorithms', () => {
   it('Should have count equal to 0 on creating a linkedlist', () => {
     const singlyLinkedList = new SinglyLinkedList();

     expect(singlyLinkedList.count()).to.be.equal(0);
 	});
});
