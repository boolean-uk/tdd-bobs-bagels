const { inventory } = require('../inventory.json')

class Basket {
  constructor() {
    this.basket = []
  }

  addBagel(sku) {
    if (typeof sku !== 'string') return false

    const item = inventory.filter((item) => item.sku === sku)[0]
    if (item === undefined) return false
    // const itemIndex = inventory.indexOf(item)

    const itemData = {
      sku: item.sku,
      price: item.price,
      name: item.name,
      variant: item.variant,
      quantity: 0,
      stackPrice: 0
    }

    this.basket.push(itemData)
    return this.basket
  }
}

module.exports = {
  Basket
}
