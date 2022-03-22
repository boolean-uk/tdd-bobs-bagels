class BobsBagels {
  constructor() {
    this.basket = [];
  }

  addBagel(description) {
    let newBagel = {
      id: 1,
      description: description,
    };
    this.basket.push(newBagel);
    return this.basket;
  }

  removeBagel(id) {
    this.basket = this.basket.filter((bagel) => bagel.id !== id);
    return this.basket;
  }
}

module.exports = BobsBagels;
