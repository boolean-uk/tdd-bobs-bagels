const { inventory } = require('../inventory.json')

class Basket {
  constructor() {
    this.shoppingList = []
  }

  add(sku) {
    const itemToAdd = inventory.find((item) => item.sku === sku)
    if (itemToAdd) {
      this.shoppingList.push({ ...itemToAdd })
    }

    return this.shoppingList
  }
}

module.exports = { Basket }
