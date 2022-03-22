class Basket {
  constructor() {
    this.basketList = [];
  }

  addToBasket(type) {
    const bagel = ["Plain"];
    this.basketList.push(type);
    return bagel;
  }

  removeFromBasket() {
    this.basketList.shift();
    return this.basketList;
  }
}

module.exports = Basket;
