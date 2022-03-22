class Basket {
  constructor() {
    this.basketList = [];
  }

  addToBasket(type) {
    const bagels = ["Plain", "Sesame", "Garlic"];
    this.basketList.push(type);
    return bagels;
  }
}

module.exports = Basket;
