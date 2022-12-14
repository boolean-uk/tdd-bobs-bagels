const { inventory } = require('../inventory.json')

class Basket {
  constructor(basketCapacity = 10) {
    this.basketCapacity = basketCapacity
    this.basket = []
  }

  addBagel(sku) {
    const found = inventory.find((bagel) => bagel.sku === sku)

    if (!found) return

    const exists = this.basket.find((bagel) => bagel.sku === found.sku)

    if (exists) ++exists.quantity
    else {
      if (this.basket.length === this.basketCapacity) return false
      found.quantity = 1
      this.basket.push(found)
    }

    return found
  }

  removeBagel(sku) {
    const found = this.basket.find((bagel) => bagel.sku === sku)

    if (!found) return false

    this.basket = this.basket.filter((bagel) => bagel.sku !== found.sku)

    return found
  }
}

// const newBasket = new Basket(12)

module.exports = { Basket }
