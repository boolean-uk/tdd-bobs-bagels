class Bagel {
  constructor () {
    this.basket = []
  }

  addToBasket (name) {
    this.basket.push(name)

    return this.basket
  }

  removeFromBasket (name) {
    return this.basket.filter(bagel => bagel !== name)
  }
}

module.exports = Bagel
