class Basket {
  constructor(capacity) {
    if (capacity <= 0) {
      this.capacity = 5
    } else {
      this.capacity = capacity
    }
    this.products = []
  }

  addBagel(bagel) {
    if (this.products.length === this.capacity)
      throw new Error('Capacity exceeded')
    this.products.push(bagel)
  }

  removeBagel(bagel) {
    if (this.products.findIndex((item) => item === bagel) === -1) {
      throw new Error('Item is not in basket')
    }
    this.products = this.products.filter((prod) => prod !== bagel)
  }

  changeCapacity(newCapacity) {
    if (newCapacity < this.products.length)
      throw new Error('You capacity cannot be smaller than products amount')
    if (newCapacity <= 0)
      throw new Error('Your capacity cannot be smaller or equal 0')
    this.capacity = newCapacity
  }
}

module.exports = Basket
