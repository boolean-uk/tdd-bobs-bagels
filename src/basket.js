const Bagel = require("./bagel");

class Basket {
  bagels;
  basketCapacity;

  constructor() {
    this.bagels = [];
    this.basketCapacity = 10;
  }

  add(bagel, quantity) {
    this.bagels.push({
      bagel,
      quantity,
    });

    return true;
  }
}

module.exports = Basket;
