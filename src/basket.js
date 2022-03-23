const Price = require('../src/price.js')

class Basket {
  // parameter the capacity for extension
  constructor () {
    this.basket = []
    this.capacity = 5
    this.price = new Price()
  }

  check () {
    return this.basket
  }

  add (name, num = 1) {
    const bagelNameArr = Object.keys(this.price.priceList)
    // prevent adding bagels that are not in the list
    if (!bagelNameArr.includes(name)) return 'Please add bagels from the list'

    if (this.basket.length + num <= this.capacity) {
      for (let i = 0; i < num; i++) {
        this.basket.push(name)
      }
      const bagelsLeft = this.capacity - this.basket.length
      return `Continue to order; ${bagelsLeft} bagels left`
    }
    return 'Your basket is full'
  }

  //  better to return a basket in all sucessful cases
  //  consider the case that adds lots of bagels at the same time
  remove (name) {
    if (this.basket.includes(name)) this.basket = this.basket.filter(bagel => bagel !== name)
    return 'You have not order this bagel'
  }

  createBigBasket () {
    if (this.basket.length === this.capacity) this.capacity = 12
  }

  checkPrice (name) {
    return this.price.checkPrice(name)
  }

  checkOut () {
    return this.price.checkOut(this.basket)
  }
}

module.exports = Basket

/* try to apply the discount in the basket */

const basket = new Basket()
console.log(basket.add('poppy'))