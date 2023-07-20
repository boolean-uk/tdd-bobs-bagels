const Product = require('./product')

class Inventory {
  constructor() {
    this.items = [
      new Product('BGLO', 'Onion', 0.49),
      new Product('BGLP', 'Plain', 0.39),
      new Product('BGLE', 'Everything', 0.49),
      new Product('BGLS', 'Sesame', 0.49)
    ]
  }

  getAvailableItems() {
    return this.items
  }
}

module.exports = Inventory
