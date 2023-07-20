class Basket {
  constructor(capacity) {
    this.capacity = capacity
    this.products = []
  }

  addBagel(bagel) {
    if (this.products.length === this.capacity)
      throw new Error('Capacity exceeded')
    this.products.push(bagel)
  }
}

module.exports = Basket
