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

    // fix this line
    if (exists) ++exists.quantity
    else {
      if (this.basket.length === this.basketCapacity) return false
      const foundCopy = { ...found, quantity: 1 }
      this.basket.push(foundCopy)
      return foundCopy
    }
  }

  removeBagel(sku) {
    const found = this.basket.find((bagel) => bagel.sku === sku)

    if (!found) return false

    this.basket = this.basket.filter((bagel) => bagel.sku !== found.sku)

    return found
  }

  displayPrices() {
    return inventory.map((bagel) => {
      const { sku, price, variant } = bagel
      return { sku, price, variant }
    })
  }

  displayTotal() {
    const total = this.basket.reduce((total, bagel) => {
      return total + +bagel.price * bagel.quantity
    }, 0)

    return `${total.toFixed(2)}`
  }
}

const newBasket = new Basket(12)
newBasket.addBagel('BGLO')
console.log(newBasket.basket)

module.exports = { Basket }
