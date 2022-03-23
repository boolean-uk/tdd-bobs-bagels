class Price {
  constructor () {
    this.priceList = {
      plain: 2,
      cheese: 3,
      cinnamon: 3,
      raisin: 3,
      poppy: 4,
      sesame: 4
    }

    this.itemList = {
      BGLO: 0.49,
      BGLP: 0.39,
      BGLE: 0.49,
      COF: 0.99
    }
  }

  checkPrice (name) {
    // make an object into an array with Object.entries()
    const priceListArr = Object.entries(this.priceList)
    // find the bagel name and price that matches to the argument
    const nameAndPrice = priceListArr.find(priceList => priceList[0] === name)
    return `bagel: ${nameAndPrice[0]}, price: $${nameAndPrice[1]}`
  }

  checkOut (basket) {
  // convert all bagels to its price, and then .reduce();
    const bagelPriceArr = basket.map(bagel => this.priceList[bagel])
    const totalSum = bagelPriceArr.reduce((firstPrice, nextPrice) => (firstPrice + nextPrice), 0)
    return `total: $${totalSum}`
  }

  createReipt() {
    
  }
}

module.exports = Price