const Item = require('./item.js')

class Basket {
  // parameter the capacity for extension
  constructor () {
    this.basket = []
    this.capacity = 5
    this.item = new Item()
  }

  add (bagel, num = 1) {
    const bagelNameArr = Object.keys(this.item.itemList)
    // prevent adding bagels that are not in the list
    if (!bagelNameArr.includes(bagel)) return 'Please add bagels from the list'

    if (this.basket.length + num <= this.capacity) {
      for (let i = 0; i < num; i++) {
        this.basket.push(bagel)
      }
      return `Your Basket: ${this.basket} ${this.isFull()}`
    }
    return this.isFull()
  }

  remove (bagel) {
    if (this.basket.includes(bagel)) {
      this.basket.splice(this.basket.indexOf(bagel), 1)
      return `Your Basket: ${this.basket} ${this.isFull()}`
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
    return this.item.checkPrice(bagel)
  }

  totalPrice () {
    return this.item.totalPrice(this.basket)
  }

  // createReceipt () {}
}

module.exports = Basket

/* try to apply the discount in the basket */