const Item = require('../item')

class InventoryItem extends Item {
  constructor (item, quantity = 0) {
    super(item.sku, item.name, item.price, item.variant)
    this.quantity = quantity
    this.specialOffers = []
  }

  inStock () { return this.quantity > 0 }

  addOffer (spOff) {
    return this.specialOffers.push(spOff)
  };
}

module.exports = InventoryItem
