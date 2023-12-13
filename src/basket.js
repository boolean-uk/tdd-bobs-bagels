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
}

module.exports = Basket
