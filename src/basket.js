const { inventory } = require('../inventory.json')

class Basket {
  constructor() {
    this.basketItems = []
    this.size = 10
  }

  addBagel(sku) {
    const bagel = inventory.filter((item) => item.sku === sku)
    this.basketItems.push(bagel)
    return bagel
  }
}

module.exports = Basket
