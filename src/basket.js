class Bagel {
  constructor() {
    this.basket = [];
  }

  addToBasket(name) {
    this.basket.push(name);

    return this.basket;
  }
}

module.exports = Bagel;
