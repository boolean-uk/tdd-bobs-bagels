import inventory from '../inventory.js'

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

  add(sku) {
    const item = this.findInventoryItem(sku)

    if (item !== 'item not found') {
      this.list.push(item)
      return 'item added'
    }

    return 'item sku not found'
  }

  findInventoryItem(sku) {
    const foundItem = this.inventory.find((item) => item.sku === sku)

    if (typeof foundItem === 'object') return foundItem
    return 'item not found'
  }
}

export default Basket
