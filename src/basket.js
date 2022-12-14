const { inventory } = require('../inventory.json')

class Basket {
  constructor() {
    this.basketItems = []
    this.basketSize = 7
  }

  addBagel(sku) {
    const bagel = inventory.filter((item) => item.sku === sku)
    this.basketItems.push(bagel)
    if (this.basketItems.length > this.basketSize) {
      throw Error('Your basket is full')
    }

    return bagel
  }
}

module.exports = Basket
