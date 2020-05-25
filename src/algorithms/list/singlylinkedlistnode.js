'use strict';

//////////////////////////////////////////////////////////////////////////
/**
 * Node structure
 */
class Node {
  constructor(id, data, next) {
    this._id = id;
    this._data = data;
    this._next = next;
  }

  set data(value) {
    this._data = value;
  }

  get data() {
    return this._data;
  }

  set next(value) {
    this._next = value;
  }

  get next() {
    return this._next;
  }

  get id() {
    return this._id;
  }
}
//////////////////////////////////////////////////////////////////////////

module.exports = Node;
