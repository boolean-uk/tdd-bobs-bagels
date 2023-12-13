const inventory = require('../inventory')

class Basket {
  constructor(capacity) {
    this.capacity = capacity
    this.basketList = []
  }

  addBagel(sku) {
    if (this.basketList.length === this.capacity) return 'Your basket is full'

    const bagel = inventory.find((item) => item.sku === sku) || null
    const basketBagel = this.basketList.find((item) => item.sku === sku) || null

    if (bagel) {
      if (basketBagel) {
        basketBagel.quantity++

        return basketBagel
      }
      const newBagel = { ...bagel, quantity: 1 }

      this.basketList.push(newBagel)

      return newBagel
    }

    return 'The bagel is not exist in our inventory'
  }

  removeBagel(sku) {
    const basketBagel = this.basketList.find((item) => item.sku === sku) || null

    if (basketBagel) {
      if (basketBagel.quantity > 1) {
        basketBagel.quantity--

        return true
      }

      this.basketList = this.basketList.filter((item) => item.sku !== sku)

      return true
    }

    return 'You do not have this bagel in your basket.'
  }
}

module.exports = Basket
