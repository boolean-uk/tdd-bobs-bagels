const inv = require('../inventory.json').inventory

class Basket {
  // Create a basket
  constructor(capacity) {
    this.items = []
    this.capacity = capacity
  }

  addItem(name, quantity = 1) {
    const isFull = this.items.length + quantity >= this.capacity
    if (isFull) {
      return 'You can not add an item'
    }
    // check if exists in inventory
    const invItem = inv.find((item) => item.sku === name)
    if (!invItem) {
      return 'Not in stock'
    }
    for (let i = 0; i < quantity; i++) {
      this.items.push(name)
    }

    return this.items
  }

  removeItem(name) {
    // check if item exists
    const item = this.items.find((item) => item === name)
    if (!item) {
      return 'Item does not exist'
    }
    this.items.splice(this.items.indexOf(item), 1)
    return this.items
  }

  checkPrice(name) {
    const item = inv.find((item) => item.sku === name)
    return item.price
  }
}
module.exports = Basket
