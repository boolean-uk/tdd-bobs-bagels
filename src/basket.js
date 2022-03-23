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

    for (let i = 0; i < num; i++) {
      this.basket.push(name)
    }
    return this.basket
  }

  remove (name) {
    return this.basket.includes(name) ? this.basket.filter(bagel => bagel !== name) : 'You have not order this bagel'
  }

  isFull () {
    const bagelsLeft = this.capacity - this.basket.length

    return this.basket.length >= this.capacity ? 'Your basket is full' : `Continue to order; ${bagelsLeft} bagels left`
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