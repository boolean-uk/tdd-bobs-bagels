const inventory = require('../inventory.json').inventory

class Basket {
  constructor(size = 12) {
    this.basket = []
    this.size = size
  }

  displayPrice(sku) {
    const item = inventory.find((item) => item.sku === sku)
    return item.price
  }

  addItem(sku) {
    if (this.basket.length >= this.size) return 'Basket is full'

    const itemToAdd = inventory.find((item) => item.sku === sku)

    if (itemToAdd) {
      this.basket.push(itemToAdd)
    } else {
      return 'invalid selection'
    }
  }

  addMultipleItems(sku, amount) {
    if (this.basket.length >= this.size) return 'Basket is full'

    if (this.size < this.basket.length + amount) {
      return 'Not enough space in Basket'
    }

    const itemToAdd = inventory.find((item) => item.sku === sku)

    for (let i = 0; i < amount; i++) {
      this.basket.push(itemToAdd)
    }
  }

  removeItem(sku) {
    let removeIndex = undefined
    this.basket.find((item, index) =>
      item.sku === sku ? (removeIndex = index) : null
    )

    if (removeIndex !== undefined) {
      this.basket.splice(removeIndex, 1)
    } else {
      return 'Not in Basket'
    }
  }

  getTotal() {
    let total = 0
    this.basket.forEach((item) => (total += Number(item.price)))
    return total.toFixed(2).toString()
  }
}

module.exports = {
  Basket
}
