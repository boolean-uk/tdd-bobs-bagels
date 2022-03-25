const Receipt = require('./receipt.js')

class Price {
  constructor () {
    // FIGURE OUT HOW NOT TO HARD CODE THESE PROPERTIES
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
  }

  checkPrice (item) {
    // make an object into an array with Object.entries()
    const itemListArr = Object.entries(this.list)
    // find the bagel item and price that matches to the argument
    const itemAndPrice = itemListArr.find(list => list[0] === item)
    return `bagel: ${itemAndPrice[0]}, price: $${itemAndPrice[1]}`
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

  // A method to consider the BGLP and COF deal
  cofDeal (skuQuantityObj) {
    const skuArr = Object.keys(skuQuantityObj)

    const bglp = skuQuantityObj['BGLP']
    const cof = skuQuantityObj['COF']

    if (skuArr.includes('BGLP') && skuArr.includes('COF')) {
      if (bglp === cof) {
        skuQuantityObj['BGLP x COF'] = bglp
        delete skuQuantityObj['BGLP']
        delete skuQuantityObj['COF']
      }
      if (bglp > cof) {
        skuQuantityObj['BGLP x COF'] = cof
        delete skuQuantityObj['COF']
        skuQuantityObj['BGLP'] = bglp - cof
      }
      if (bglp < cof) {
        skuQuantityObj['BGLP x COF'] = bglp
        delete skuQuantityObj['BGLP']
        skuQuantityObj['COF'] = cof - bglp
      }
    }
    return skuQuantityObj
  }

  subPrice (cofDeal) {
    const subPriceObj = {}

    for (const skuQuantity in cofDeal) {
      const sku = skuQuantity
      const quantity = cofDeal[sku]
      let subPrice = 0

      if (sku === 'BGLP x COF') subPrice += 1.25 * quantity
      if (sku === 'BGLO' || sku === 'BGLE') subPrice += (2.49 * (Math.floor(quantity / 6))) + (this.list[sku] * (quantity % 6))
      if (sku === 'BGLP') subPrice += (3.99 * Math.floor(quantity / 12)) + (this.list[sku] * (quantity % 12))
      if (sku === 'COF') subPrice += this.list[sku] * (quantity)
      subPriceObj[sku] = Number(Number.parseFloat(subPrice).toFixed(3))
    }
    return subPriceObj
  }

  convertSKU (subPrice) {
    const skuObj = {}

    for (const skuQuantity in subPrice) {
      let sku = skuQuantity
      const quantity = subPrice[sku]

      if (sku === 'BGLO') sku = 'Onion Bagel'
      if (sku === 'BFLP') sku = 'Plain Bagel'
      if (sku === 'BGLE') sku = 'Everything Bagel'
      if (sku === 'COF') sku = 'Coffee'
      if (sku === 'BGLP x COF') sku = 'Coffee & Plain Bagel Combo'
      skuObj[sku] = quantity
    }
    return skuObj
  }

  totalPrice (basket) {
  // convert all bagels to its price, and then .reduce();
    let totalPrice
    // conditional if basket type is array (for core criteria) or object (for extension)
    if (Array.isArray(basket)) {
      const bagelPriceArr = basket.map(bagel => this.list[bagel])
      totalPrice = bagelPriceArr.reduce((firstPrice, nextPrice) => (firstPrice + nextPrice), 0)
      return `total: $${totalPrice}`
    }
    const subPriceArr = Object.values(basket)
    totalPrice = subPriceArr.reduce((firstPrice, nextPrice) => (firstPrice + nextPrice), 0)
    return Number(Number.parseFloat(totalPrice).toFixed(3))
  }

  receiptLine (skuQuantity, subPrice) {
    return this.receipt.receiptLine(skuQuantity, subPrice)
  }

  printReceipt (receiptLine, totalPrice) {
    return this.receipt.printReceipt(receiptLine, totalPrice)
  }
}

module.exports = Price

// Create the variable first! and then merge it

const price = new Price()
const basket = ['BGLP', 'COF', 'COF', 'BGLO']
const skuQuantity = price.skuQuantity(basket)
const cofDeal = price.cofDeal(skuQuantity)
const subPrice = price.subPrice(cofDeal)
const totalPrice = price.totalPrice(subPrice)

console.log(price.convertSKU(subPrice))