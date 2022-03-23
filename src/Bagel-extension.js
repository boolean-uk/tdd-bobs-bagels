class Bagel {
  constructor () {
    this.basket = []
    this.itemList = {
      BGLO: 0.49,
      BGLP: 0.39,
      BGLE: 0.49,
      COF: 0.99
    }
  }

  addToBasket (name, num = 1) {
    const bagelNameArr = Object.keys(this.itemList)
    // prevent adding bagels that are not in the list
    if (!bagelNameArr.includes(name)) return 'Please add bagels from the list'

    for (let i = 0; i < num; i++) {
      this.basket.push(name)
    }
    return this.basket
  }

  checkOut () {
    const bagelPriceArr = this.basket.map(bagel => this.itemList[bagel])
    const totalSum = bagelPriceArr.reduce((firstPrice, nextPrice) => (firstPrice + nextPrice), 0)
    return `total: $${totalSum}`
  }
}

module.exports = Bagel