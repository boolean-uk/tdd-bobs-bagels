const inventory = require('../inventory.json').inventory

class Basket {
  constructor(size = 5) {
    if (!Number.isInteger(size) || size < 1 || typeof size !== 'number') {
      console.error(
        'Invalid size entered, basket size has been set to default (5)'
      )
      size = 5
    }
    this.basket = []
    this.size = size
  }

  addItem(sku) {
    if (sku === undefined) {
      console.error('No SKU Entered')
      return 'No SKU Entered'
    } else if (this.basket.length === this.size) {
      return 'Basket is full. Item was not added.'
    } else {
      const addedItem = inventory.find((item) => item.sku === sku)
      if (addedItem) {
        this.basket.push(addedItem)
        return this.basket
      } else {
        return 'Chosen item not found'
      }
    }
  }

  removeItem(sku) {
    if (sku === undefined) {
      return 'No SKU entered'
    } else {
      const itemToRemove = this.basket.find((item) => item.sku === sku)
      if (itemToRemove) {
        const deletionIndex = this.basket.indexOf(itemToRemove)
        this.basket.splice(deletionIndex, 1)
        return this.basket
      } else {
        return 'Chosen item not found'
      }
    }
  }
}

module.exports = Basket

/*
BASKET FORMAT
Basket {
  basket: [ { sku: 'BGLO', price: '0.49', name: 'Bagel', variant: 'Onion' } ]     
}
*/
