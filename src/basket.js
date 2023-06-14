const inventory = require('../inventory.json').inventory

class Basket {
  constructor() {
    this.basket = []
  }

  addItem(sku) {
    if (sku === undefined) {
      return 'No SKU Entered'
    } else {
      const addedItem = inventory.find((item) => item.sku === sku)
      if (addedItem) {
        this.basket.push(addedItem)
      } else {
        return 'Added item not found'
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
