const Item = require('./item')
class BasketItem extends Item {
  constructor (item, quantity = 1) {
    super(item.sku, item.name, item.price)
    this.quantity = quantity
  }
}

module.exports = BasketItem