const Item = require('./item');

class Basket {
  constructor(capacity = 5) {
    this.items = [];
    this.capacity = capacity;
  }
}

module.exports = Basket;