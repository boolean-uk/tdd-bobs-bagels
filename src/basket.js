class Basket {
  constructor() {
    this.basket = []
  }

  addBagel(bagel) {
    if (bagel !== '') {
      this.basket.push({ type: bagel })
    }
    return this.basket
  }
}

module.exports = Basket
