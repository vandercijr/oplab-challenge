'use strict';

/**
 * Arquivo: singlylinkedlist.js
 * Author: Vanderci Curvelo Junior
 * Description: very basic implementation of a singly linked list'
 * Data: 24/05/2020
 *
 */
const  Node = require('./singlylinkedlistnode');

class SinglyLinkedList  {
  constructor() {
    this.head_node = undefined;
  }

  validationMessage =  ['Id should be an integer'];

  //////////////////////////////////////////////////////////////////////////
  // add a node at top of the list
  addToTop(id, data)  {
    let next = undefined;

    if (typeof this.head_node !== 'undefined') {
        next = this.head_node;
    }

    this.head_node = new Node(id, data, next);
  };
  //////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////
  // add a node like push data into an array
  push(id, data)  {
    let current_node = this.head_node;
    let next;

    if (typeof this.head_node === 'undefined') {
        this.addToTop(id, data);
        return true;
    }

    while (typeof current_node.next !== 'undefined') current_node = current_node.next;

    current_node.next = new Node(id, data, next);
  };
  //////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////
  remove(id)  {
  };
  //////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////
  find(id)  {
    if (!this.isValidId(id)) return this.validationMessage[0];

    let current_node = this.head_node;

    while (typeof current_node !== 'undefined') {
      if (current_node.id === id) {
        return current_node;
      }
      current_node = current_node.next;
    }

    return new Node({}, {});
  };
  //////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////
  findAll() {
    return this.head_node;
  };
  //////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////
  count() {
    let current_node = this.head_node;
    let count = 0;

    while (typeof current_node !== 'undefined') {
      count++;
      current_node = current_node.next;
    }

    return count;
  };
  //////////////////////////////////////////////////////////////////////////
}

module.exports = SinglyLinkedList;
