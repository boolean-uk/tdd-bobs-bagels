const Item = require('./item')
class BasketItem extends Item {
  constructor (item, quantity = 1) {
    super(item.sku, item.name, item.price)
    this.quantity = quantity
    this.offerPrice = undefined
  }

  // Price after applying offers
  totalPrice () {
    if (this.offerPrice) return this.offerPrice
    return this.totalBasePrice()
  }

  // Base price without offers
  totalBasePrice () {
    return this.price * this.quantity
  }
}

module.exports = BasketItem
