const inventory = require('./inventory.js')

class Basket {
  constructor(basket = []) {
    this.basket = basket
  }

  addToBasket(sku) {
    const item = inventory.find((x) => x.sku === sku)
    this.basket.push(item)
    return item
  }

  removeFromBasket(sku) {
    const filterdList = this.basket.filter((x) => x.sku !== sku)
    this.basket = filterdList
    return filterdList
  }
}

module.exports = Basket
