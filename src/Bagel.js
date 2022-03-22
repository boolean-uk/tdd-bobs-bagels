class Bagel {
  constructor () {
    this.basket = []
    this.capacity = 5
  }

  addToBasket (name) {
    this.basket.push(name)

    return this.basket
  }

  removeFromBasket (name) {
    return this.basket.includes(name) ? this.basket.filter(bagel => bagel !== name) : 'You have not order this bagel'
  }

  isFull () {
    const bagelsLeft = this.capacity - this.basket.length
    return this.basket.length > this.capacity ? 'Your basket is full' : `Continue to order; ${bagelsLeft} bagels left`
  }

  createBigBasket () {
    if (this.basket.length > this.capacity) this.capacity = 12
  }
}

module.exports = Bagel
