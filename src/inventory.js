const Bagel = require('./bagel')

class Inventory {
  constructor() {
    this.items = [
      new Bagel('BGLO', 'Onion', 0.49),
      new Bagel('BGLP', 'Plain', 0.39),
      new Bagel('BGLE', 'Everything', 0.49),
      new Bagel('BGLS', 'Sesame', 0.49)
    ]
  }

  getAvailableItems() {
    return this.items
  }
}

module.exports = Inventory
