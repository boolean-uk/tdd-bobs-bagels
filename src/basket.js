class Basket {
  constructor() {
    this.basketList = [];
    this.capacity = 4;
  }

  addToBasket(bagel) {
    this.basketList.push(bagel);
    return this.basketList;
  }

  removeFromBasket(bagel) {
    this.basketList.shift(bagel);
    return this.basketList;
  }

  fullBasket() {
    if (this.basketList.length >= this.capacity) {
      return "Your basket is full";
    } else {
      return "You can buy more bagels";
    }
  }
}

module.exports = Basket;
