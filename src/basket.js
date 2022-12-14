const { inventory } = require('../inventory.json')

class Basket {
  constructor() {
    this.basketItems = []
    this.basketSize = 3
  }

  addBagel(sku) {
    if (this.basketItems.length > this.basketSize) {
      throw new Error('Your basket is full')
    }

    const bagel = inventory.filter((item) => item.sku === sku)
    this.basketItems.push(bagel)
    return bagel
  }
}

module.exports = Basket
