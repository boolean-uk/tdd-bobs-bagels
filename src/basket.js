const inventory = require('./inventory.js')

class Basket {
  constructor(basket = [], capacity = 5) {
    this.basket = basket
    this.capacity = capacity
  }

  addToBasket(sku) {
    const item = inventory.find((obj) => obj.sku === sku)
    if (this.basket.length < this.capacity) {
      this.basket.push(item)
      return this.basket
    } else {
      return 'reached capacity, would you like to increase capacity?'
    }
  }

  removeFromBasket(sku) {
    const filterdList = this.basket.filter((obj) => obj.sku !== sku)
    const item = this.basket.findIndex((obj) => obj.sku === sku)
    if (item === -1) {
      return 'item does not exist in your basket'
    } else {
      this.basket = filterdList
      return filterdList
    }
  }

  increaseCapacity() {
    return this.capacity + 3
  }

  viewPrice(sku) {
    const item = this.basket.find((obj) => obj.sku === sku)
    return item.price
  }

  totalCost() {
    let totalCost = 0
    this.basket.forEach((obj) => {
      const price = obj.price
      const priceAsNum = +price
      totalCost = totalCost + priceAsNum
    })
    const totalAsString = totalCost.toString()
    return totalAsString
  }
}

module.exports = Basket
