class Basket {
  constructor(capacity) {
    this.capacity = capacity
    this.products = []
  }

  addBagel(bagel) {
    this.products.push(bagel)
  }
}

module.exports = Basket
