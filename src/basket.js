const Bagel = require("./bagel");

class Basket {
  bagels;
  basketCapacity;

  constructor() {
    this.bagels = [];
    this.basketCapacity = 10;
  }

  add(bagel, quantity) {
    const findResult = this.find(bagel);

    if (findResult.length > 0) {
      findResult[0].quantity += quantity;

      return true;
    }

    this.bagels.push({
      bagel,
      quantity,
    });

    return true;
  }

  find(bagel) {
    return this.bagels.filter((item) => item.bagel.name === bagel.name);
  }
}

module.exports = Basket;
