const Bagel = require("./bagel");

class Basket {
  bagels;
  basketCapacity;
  basketQuantity;

  constructor() {
    this.bagels = [];
    this.basketCapacity = 10;
    this.basketQuantity = 0;
  }

  add(bagel, quantity) {
    if (this.basketQuantity + quantity <= this.basketCapacity) {
      const findResult = this.find(bagel);

      //if bagel is already in the basket
      if (findResult.length > 0) {
        findResult[0].quantity += quantity;
      } else {
        //if it is a new bagel
        this.bagels.push({
          bagel,
          quantity,
        });
      }

      this.basketQuantity += quantity;
      return true;
    }

    return false;
  }

  find(bagel) {
    return this.bagels.filter((item) => item.bagel.name === bagel.name);
  }
}

module.exports = Basket;
