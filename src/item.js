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

    // this.list = {}
  }

  // addToList (item, price) {
  //   this.list[item] = price
  // }

  checkPrice (item) {
    // make an object into an array with Object.entries()
    const itemListArr = Object.entries(this.itemList)
    // find the bagel item and price that matches to the argument
    const itemAndPrice = itemListArr.find(itemList => itemList[0] === item)
    return `bagel: ${itemAndPrice[0]}, price: $${itemAndPrice[1]}`
  }

  totalPrice (basket) {
  // convert all bagels to its price, and then .reduce();
    const bagelPriceArr = basket.map(bagel => this.list[bagel])
    const totalSum = bagelPriceArr.reduce((firstPrice, nextPrice) => (firstPrice + nextPrice), 0)
    return `total: $${totalSum}`
  }

  skuQuantity (basket) {
    const skuObj = {}
    // Go through the basket, and create @Obj {item: quantity}
    // if item exists in obj, add 1; else create a new property with value 1
    basket.forEach(item => {
      skuObj[item] ? skuObj[item] += 1 : skuObj[item] = 1
    })
    return Object.entries(skuObj)
  }
}
module.exports = Item

const exBasket = ['BGLO', 'BGLO', 'BGLO', 'BGLO', 'BGLO', 'BGLO']
const item = new Item()

console.log(item.skuQuantity(exBasket))

// console.log(2 % 6)

// change variable to itemQuantity (or SKU and try to make is shorter!!)
  // receiptLine(quantity, name, price) and create smaller functions!
  // Create the variable first! and then merge it
  
  //   receipt (basket) {
  //     const skuQuantity = {}
  //     let receipt = ''
  //     // Go through the basket, and create @Obj skuQuantity {item: quantity}
  //     // if item exists in obj, add 1; else create a new property with value 1
  //     basket.forEach(item => {
  //       skuQuantity[item] ? skuQuantity[item] += 1 : skuQuantity[item] = 1
  //     })
  
  //     for (const itemAndQuantity in skuQuantity) {
  //       // declare and initialize these hard-reading variables to make it easier
  //       // const quantity =  skuQuantity[itemAndQuantity]
  //       // const item = itemAndQuantity
  //       if ( skuQuantity[itemAndQuantity] % 6 === 0 && itemAndQuantity === 'BGLO') {
  //         receipt += `${ skuQuantity[itemAndQuantity]}x ${itemAndQuantity} = ${2.49 * ( skuQuantity[itemAndQuantity] % 6) + this.list[itemAndQuantity] *  skuQuantity[itemAndQuantity] % 6}`
  //       } else {
  //       // receipt += quantity x item = total
  //         receipt += `${ skuQuantity[itemAndQuantity]}x ${itemAndQuantity} = ${this.list[itemAndQuantity] *  skuQuantity[itemAndQuantity]}\n`
  //       }
  //     }
  //     return `${receipt}--------------`
  //   }
  // }