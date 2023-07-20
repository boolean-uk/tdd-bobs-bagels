const Product = require('./product')
const Discount = require('./Discount')

class Inventory {
  constructor() {
    this.items = [
      new Product('BGLO', 'Onion', 0.49),
      new Product('BGLP', 'Plain', 0.39),
      new Product('BGLE', 'Everything', 0.49),
      new Product('BGLS', 'Sesame', 0.49)
    ]
    this.discounts = [
      new Discount(this.items[0], 6, 2.49),
      new Discount(this.items[1], 12, 3.99),
      new Discount(this.items[2], 6, 2.49)
    ]
  }

  getAvailableItems() {
    return this.items
  }

  getAvailableDiscounts() {
    return this.discounts
  }
}

module.exports = Inventory
