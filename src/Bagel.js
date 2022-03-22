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
    return this.basket.filter(bagel => bagel !== name)
  }

  isFull () {
    return this.basket.length > this.capacity ? 'Your basket is full' : 'Continue to order'
  }
}

module.exports = Bagel
