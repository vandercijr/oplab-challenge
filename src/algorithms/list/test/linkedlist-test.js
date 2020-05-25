'use strict';

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

const item1 = new Node(1, input[0]);
const item2 = new Node(2, input[1]);

const mylist = new Node(item1._id, item1._data);

mylist.next = item2;

describe('Test some linkedlist algorithms', function() {
  it('Should have count equal to 0 on creating a linkedlist', function() {
    const singlyLinkedList = new SinglyLinkedList();

    expect(singlyLinkedList.count()).to.be.equal(0);
  });

  it('Should have count equal to 1 pushing a item to the linked list', function() {
    const singlyLinkedList = new SinglyLinkedList();

    singlyLinkedList.push(1, input[0]);

    expect(singlyLinkedList.count()).to.be.equal(1);
  });

  it('Should have count equal to 2 pushing a item to the linked list', function() {
    const singlyLinkedList = new SinglyLinkedList();

    singlyLinkedList.push(1, input[0]);
    singlyLinkedList.push(2, input[1]);

    expect(singlyLinkedList.count()).to.be.equal(2);
  });

  it('Should push an item to the linked list', function() {
    const singlyLinkedList = new SinglyLinkedList();

    singlyLinkedList.push(1, input[0]);

    expect(singlyLinkedList.findAll()).to.deep.equal(item1);
  });

  it('Should push two items to the linked list', function() {
    const singlyLinkedList = new SinglyLinkedList();

    singlyLinkedList.push(1, input[0]);
    singlyLinkedList.push(2, input[1]);

    expect(singlyLinkedList.findAll()).to.deep.equal(mylist);
  });

  it('Should find the specified item on the linked list', function() {
    const singlyLinkedList = new SinglyLinkedList();

    singlyLinkedList.push(1, input[0]);
    singlyLinkedList.push(2, input[1]);

    expect(singlyLinkedList.find(2)).to.deep.equal(item2);
  });

  it('Should remove the first item from the linked list', function() {
    const singlyLinkedList = new SinglyLinkedList();

    singlyLinkedList.push(1, input[0]);
    singlyLinkedList.push(2, input[1]);

    singlyLinkedList.remove(1);

    expect(singlyLinkedList.findAll()).to.deep.equal(item2);
  });

  it('Should remove the second item from the linked list', function() {
    const singlyLinkedList = new SinglyLinkedList();

    singlyLinkedList.push(1, input[0]);
    singlyLinkedList.push(2, input[1]);

    singlyLinkedList.remove(2);

    expect(singlyLinkedList.findAll()).to.deep.equal(item1);
  });
});
