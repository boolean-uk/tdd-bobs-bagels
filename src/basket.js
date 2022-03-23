const Item = require('../src/item.js')

class Basket {
  constructor () {
    this.basket = []
    this.capacity = 5
    this.priceList = {
      plain: 2,
      cheese: 3,
      cinnamon: 3,
      raisin: 3,
      poppy: 4,
      sesame: 4
    }
  }

  add (name, num = 1) {
    const bagelNameArr = Object.keys(this.priceList)
    // prevent adding bagels that are not in the list
    if (!bagelNameArr.includes(name)) return 'Please add bagels from the list'

    if (this.basket.length < this.capacity && num <= this.capacity) {
      for (let i = 0; i < num; i++) {
        this.basket.push(name)
      }
      const bagelsLeft = this.capacity - this.basket.length
      return `Continue to order; ${bagelsLeft} bagels left`
    }
    return 'Your basket is full'
  }

  remove (name) {
    return this.basket.includes(name) ? this.basket.filter(bagel => bagel !== name) : 'You have not order this bagel'
  }

  createBigBasket () {
    if (this.basket.length >= this.capacity) this.capacity = 12
  }

  checkPrice (name) {
    // make an object into an array with Object.entries()
    const priceListArr = Object.entries(this.priceList)
    // find the bagel name and price that matches to the argument
    const nameAndPrice = priceListArr.find(priceList => priceList[0] === name)

    return `bagel: ${nameAndPrice[0]}, price: $${nameAndPrice[1]}`
  }

  checkOut () {
    // convert all bagels to its price, and then .reduce();
    const bagelPriceArr = this.basket.map(bagel => this.priceList[bagel])
    const totalSum = bagelPriceArr.reduce((firstPrice, nextPrice) => (firstPrice + nextPrice), 0)
    return `total: $${totalSum}`
  }
}

module.exports = Basket