// const pricing = require('../src/pricinc.js')

class Basket {
  // parameter the capacity for extension
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

    // this.price = new Price ()
  }

  check () {
    return this.basket
  }

  add (name, num = 1) {
    const bagelNameArr = Object.keys(this.priceList)
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
    // make an object into an array with Object.entries()
    const priceListArr = Object.entries(this.priceList)
    // find the bagel name and price that matches to the argument
    const nameAndPrice = priceListArr.find(priceList => priceList[0] === name)

    return `bagel: ${nameAndPrice[0]}, price: $${nameAndPrice[1]}`

    // return this.price.checkPrice(name)
  }

  checkOut () {
    // convert all bagels to its price, and then .reduce();
    const bagelPriceArr = this.basket.map(bagel => this.priceList[bagel])
    const totalSum = bagelPriceArr.reduce((firstPrice, nextPrice) => (firstPrice + nextPrice), 0)
    return `total: $${totalSum}`

    // return this.price.checkOut(this.basket)
  }
}

module.exports = Basket

/* create a pricing.js with pricing class

constructor() {
   this.priceList = {
      plain: 2,
      cheese: 3,
      cinnamon: 3,
      raisin: 3,
      poppy: 4,
      sesame: 4
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
  }}
*/

/*try to apply the discount in the basket*/ 