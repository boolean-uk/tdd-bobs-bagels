const Receipt = require('./receipt.js')

class Item {
  constructor () {
    this.list = {
      plain: 2,
      cheese: 3,
      cinnamon: 3,
      raisin: 3,
      poppy: 4,
      sesame: 4,
      BGLO: 0.49,
      BGLP: 0.39,
      BGLE: 0.49,
      COF: 0.99
    }
    this.receipt = new Receipt()
    // this.list = {}
  }

  // addToList (item, price) {
  //   this.list[item] = price
  // }

  checkPrice (item) {
    // make an object into an array with Object.entries()
    const itemListArr = Object.entries(this.list)
    // find the bagel item and price that matches to the argument
    const itemAndPrice = itemListArr.find(list => list[0] === item)
    return `bagel: ${itemAndPrice[0]}, price: $${itemAndPrice[1]}`
  }

  totalPrice (basket) {
  // convert all bagels to its price, and then .reduce();
    let totalPrice
    if (Array.isArray(basket)) {
      const bagelPriceArr = basket.map(bagel => this.list[bagel])
      totalPrice = bagelPriceArr.reduce((firstPrice, nextPrice) => (firstPrice + nextPrice), 0)
      return `total: $${totalPrice}`
    }
    const subPriceArr = Object.values(basket)
    totalPrice = subPriceArr.reduce((firstPrice, nextPrice) => (firstPrice + nextPrice), 0)
    return Number(Number.parseFloat(totalPrice).toFixed(3))
  }

  skuQuantity (basket) {
    const skuQuantityObj = {}
    // Go through the basket, and create @Obj {item: quantity}
    // if item exists in obj, add 1; else create a new property with value 1
    basket.forEach(item => {
      skuQuantityObj[item] ? skuQuantityObj[item] += 1 : skuQuantityObj[item] = 1
    })
    return skuQuantityObj
  }

  subPrice (skuQuantityObj) {
    const subPriceObj = {}

    for (const skuQuantity in skuQuantityObj) {
      const sku = skuQuantity
      const quantity = skuQuantityObj[sku]
      let subPrice = 0

      if (sku === 'BGLO' || sku === 'BGLE') subPrice += (2.49 * (Math.floor(quantity / 6))) + (this.list[sku] * (quantity % 6))
      if (sku === 'BGLP') subPrice += (3.99 * Math.floor(quantity / 12)) + (this.list[sku] * (quantity % 12))
      if (sku === 'COF') subPrice += this.list[sku] * (quantity)
      subPriceObj[sku] = Number(Number.parseFloat(subPrice).toFixed(3))
    }
    return subPriceObj
  }

  receiptLine (skuQuantity, subPrice) {
    return this.receipt.receiptLine(skuQuantity, subPrice)
  }

  printReceipt (receiptLine, totalPrice) {
    return this.receipt.printReceipt(receiptLine, totalPrice)
  }
}

module.exports = Item

// change variable to itemQuantity (or SKU and try to make is shorter!!)
// receiptLine(quantity, name, price) and create smaller functions!
// Create the variable first! and then merge it

