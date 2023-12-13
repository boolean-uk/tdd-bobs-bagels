const inventory = require('../inventory.js')

class Basket {
  constructor() {
    this._list = []
    this._inventory = inventory
  }

  get list() {
    return this._list
  }

  get inventory() {
    return this._inventory
  }

  findInventoryItem(sku) {
    const foundItem = this.inventory.find((item) => item.sku === sku)

    if (typeof foundItem === 'object') return foundItem
    return 'item not found'
  }
}

module.exports = Basket
