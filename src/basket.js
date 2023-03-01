const inventory = require('../inventory.json').inventory

class Basket {
  constructor(size = 12) {
    this.basket = []
    this.size = size
    this.total = 0
  }

  displayPrice(sku) {
    const item = inventory.find((item) => item.sku === sku)
    return item.price
  }

  addItem(sku) {
    if (this.basket.length >= this.size) return 'Basket is full'

    const itemToAdd = inventory.find((item) => item.sku === sku)

    if (itemToAdd) {
      this.basket.push(itemToAdd)
    } else {
      return 'invalid selection'
    }
  }

  addMultipleItems(sku, amount) {
    if (this.basket.length >= this.size) return 'Basket is full'

    if (this.size < this.basket.length + amount) {
      return 'Not enough space in Basket'
    }

    const itemToAdd = inventory.find((item) => item.sku === sku)

    for (let i = 0; i < amount; i++) {
      this.basket.push(itemToAdd)
    }
  }

  removeItem(sku) {
    let removeIndex = undefined
    this.basket.find((item, index) =>
      item.sku === sku ? (removeIndex = index) : null
    )

    if (removeIndex !== undefined) {
      this.basket.splice(removeIndex, 1)
    } else {
      return 'Not in Basket'
    }
  }

  checkForSpecialOffer(basket) {
    basket.forEach((item) => {
      if (item.sku === 'BGLP' && item.quantity >= 12) {
        this.total += 3.99
        item.quantity -= 12
        this.checkForSpecialOffer(basket)
      } else if (
        item.sku === 'COF' &&
        basket.find((e) => e.sku === 'BGLP')?.quantity > 0 &&
        item.quantity > 0
      ) {
        this.total += 1.25
        item.quantity--
        basket.find((e) => e.sku === 'BGLP').quantity--
        this.checkForSpecialOffer(basket)
      } else if (
        (item.sku === 'BGLO' && item.quantity >= 6) ||
        (item.sku === 'BGLE' && item.quantity >= 6)
      ) {
        this.total += 2.49
        item.quantity -= 6
        this.checkForSpecialOffer(basket)
      }
    })
  }

  getTotal() {
    const tempBasket = inventory.map((item) => {
      return { ...item, quantity: 0 }
    })

    this.basket.forEach((item) => {
      tempBasket.find((tempItem) => tempItem.sku === item.sku).quantity++
    })
    const finalBasket = tempBasket.filter((item) => item.quantity != 0)

    this.checkForSpecialOffer(finalBasket)

    finalBasket.forEach((item) => {
      this.total += item.price * item.quantity
    })

    return this.total.toFixed(2).toString()
  }
}

module.exports = {
  Basket
}
