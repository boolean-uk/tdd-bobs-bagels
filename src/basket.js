const Inventory = require('./inventory/inventory')
const Receipt = require('./receipt/Receipt')

class Basket {
  constructor (itemCapacity = 5) {
    this.items = []
    this.itemCapacity = itemCapacity
  }

  getItems () { return this.items }

  getItem (item) {
    if (typeof item === 'string') return this.items.find(i => i.sku === item)
    return this.items.find(i => i.sku === item.sku)
  }

  itemCount () { return this.items.length }

  size () { return this.getItems().reduce((p, c) => p + c.quantity, 0) }

  capacity () { return this.itemCapacity }

  add (item) {
    const oldSize = this.size()
    if (oldSize + item.quantity > this.capacity()) return false
    if (this.items.length < this.capacity()) { return this.items.push(item) === oldSize + 1 }
  };

  /**
   * @param item The item to remove
   * @returns True when the item was successfully removed, otherwise false.
   */
  remove (item) {
    const index = this.items.indexOf(item)
    return index === -1 ? false : this.items.splice(index, 1).length === 1
  };

  // So we can compare the base price and the price after applying offers
  baseBasketPrice () {
    return this.items.reduce((p, c) => p + c.totalBasePrice(), 0)
  }

  basketPrice () {
    // Check for Inventory instance
    if (Inventory.instance) { Inventory.instance.applyOffers(this) }

    return this.items.reduce((p, c) => p + c.totalPrice(), 0)
  };

  includes (item) {
    return this.getItem(item) !== undefined
  }

  receipt () {
    return new Receipt(this)
  }
}

module.exports = Basket
