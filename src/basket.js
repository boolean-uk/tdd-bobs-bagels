const Price = require('../src/price.js')

class Basket {
  // parameter the capacity for extension
  constructor () {
    this.basket = []
    this.capacity = 5
    this.price = new Price()
  }

  add (bagel, num = 1) {
    const bagelNameArr = Object.keys(this.price.priceList)
    // const SKUArr = Object.keys(this.price.itemList)
    // prevent adding bagels that are not in the list
    if (!bagelNameArr.includes(bagel)) return 'Please add bagels from the list'

    if (this.basket.length + num <= this.capacity) {
      for (let i = 0; i < num; i++) {
        this.basket.push(bagel)
      }
      return `Your Basket: ${this.basket} ${this.isFull()}`
    }
  }

  remove (bagel) {
    if (this.basket.includes(bagel)) {
      this.basket.splice(this.basket.indexOf(bagel), 1)
      return this.basket
    }
    return 'You have not order this bagel'
  }

  isFull () {
    const bagelsLeft = this.capacity - this.basket.length
    if (this.basket.length === this.capacity) return 'Your basket is full'
    return `Continue to order; ${bagelsLeft} bagels left`
  }

  createBigBasket () {
    if (this.basket.length === this.capacity) this.capacity = 12
  }

  checkPrice (bagel) {
    return this.price.checkPrice(bagel)
  }

  totalPrice () {
    return this.price.checkOut(this.basket)
  }

  // createReceipt () {}
}

module.exports = Basket

/* try to apply the discount in the basket */

// const basket = new Basket()
// console.log(basket.add('poppy'))
// console.log(basket.add('poppy'))
