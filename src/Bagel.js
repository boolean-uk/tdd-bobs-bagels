class Bagel {
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

  addToBasket (name) {
    this.basket.push(name)

    return this.basket
  }

  removeFromBasket (name) {
    return this.basket.includes(name) ? this.basket.filter(bagel => bagel !== name) : 'You have not order this bagel'
  }

  isFull () {
    const bagelsLeft = this.capacity - this.basket.length
    return this.basket.length > this.capacity ? 'Your basket is full' : `Continue to order; ${bagelsLeft} bagels left`
  }

  createBigBasket () {
    if (this.basket.length > this.capacity) this.capacity = 12
  }

  checkPrice (name) {
    // make an object into an array with Object.entries()
    const priceListArr = Object.entries(this.priceList)
    // find the bagel name and price that matches to the argument
    const nameAndPrice = priceListArr.find(priceList => priceList[0] === name)

    return `bagel: ${nameAndPrice[0]}, price: $${nameAndPrice[1]}`
  }
}

module.exports = Bagel
