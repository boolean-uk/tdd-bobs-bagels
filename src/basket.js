const inventory = require('./inventory.js')

class Frequency {
  constructor() {
    {
      this.BGLO= 2
      this.BGLP= 12
      this.BGLE= 6
      this.COF= 3
    }
  }
}

class Basket {
  constructor(capacity = 10) {
    this.basket = []
    this.capacity = capacity
  }

  addToBasket(sku, quantity) {
    const addedBagel = inventory.find((bagel) => bagel.sku === sku)
    const pushQuantity = quantity

    if (addedBagel) {
      const basket = new Basket()
      for (let i = 0; i < pushQuantity; i++) {
        this.basket.push(addedBagel)
      }
      return basket
      // return addedBagel
    } else {
      return 'this bagel does not exist'
    }
  }

  removeFromBasket(sku) {
    const removedBagelList = this.basket.filter((bagel) => bagel.sku !== sku)
    const removedBagel = (bagel) => bagel.sku === sku

    const index = this.basket.findIndex(removedBagel)

    if (index === -1) {
      return 'this bagel is not in your basket'
    } else {
      this.basket = removedBagelList
      // const updatedBasket = new Basket()
      // this.basket.splice(index, 1)
      return removedBagelList
    }
  }

  //also enables the capacity to increase
  checkBasketCapacity() {
    const basket = new Basket()
    return basket.capacity
  }

  displayPrice(sku) {
    //filter inventory
    const bagelPrice = inventory.filter((bagel) => bagel.sku === sku)
    //add to a basket to store it so that function can check the price
    for (let i = 0; i < bagelPrice.length; i++) {
      //should only have one: can only check one at a time
      return bagelPrice[i].price
    }
  }

  // calculateFrequency() {

  // }
  //   const aBasket = [
  //     {
  //       sku: 'BGLO',
  //       price: '0.49',
  //       name: 'Bagel',
  //       variant: 'Onion'
  //     },
  //     {
  //       sku: 'BGLP',
  //       price: '0.39',
  //       name: 'Bagel',
  //       variant: 'Plain'
  //     },
  //     {
  //       sku: 'BGLE',
  //       price: '0.49',
  //       name: 'Bagel',
  //       variant: 'Everything'
  //     },
  //     {
  //       sku: 'BGLE',
  //       price: '0.49',
  //       name: 'Bagel',
  //       variant: 'Everything'
  //     }
  //   ]

  calculateBGLODiscount() {
    const remainder = frequency.BGLO % 6
    const bundleItems = frequency.BGLO - remainder
    const numBundles = bundleItems / 6

    const bundlePrice = 2.49 * numBundles
    const individualPrice = 0.49 * remainder

    const totalBGLOCost = bundlePrice + individualPrice
    const fixedTotal = totalBGLOCost.toFixed(2)
    //   console.log('totalBGLOCost:', fixedTotal)

    return fixedTotal
  }

  calculateBGLEDiscount() {
    const remainder = frequency.BGLE % 6
    const bundleItems = frequency.BGLE - remainder
    const numBundles = bundleItems / 6

    const bundlePrice = 2.49 * numBundles
    const individualPrice = 0.49 * remainder

    const totalBGLOCost = bundlePrice + individualPrice
    const fixedTotal = totalBGLOCost.toFixed(2)
    //   console.log('totalBGLOCost:', fixedTotal)

    console.log('fixedTotal: BGLE frewquency =6', fixedTotal)
    return fixedTotal
  }

  //will include coffee discount
  calculateBGLPDiscount() {
    const remainder = frequency.BGLP % 12
    const bundleItems = frequency.BGLP - remainder
    const numBundles = bundleItems / 12

    const bundlePrice = 3.99 * numBundles
    const individualPrice = 0.39 * remainder

    const totalCost = bundlePrice + individualPrice
    const fixedTotal = totalCost.toFixed(2)
    console.log('totalCost:', fixedTotal)
    return fixedTotal
  }

  calculateCOFDiscount() {
    //TODO: get code to work. Implement logic for if quantity.cof > remainder and refactor

    return frequency.COF * 0.99

    // let coffeeDeal = 0
    // const cofRemainder = frequency.COF % remainder
    // const cofBundleItems = frequency.COF - cofRemainder
    // const numCofBundles = bundleItems / remainder

    // //this.remainder: access from BGLP
    // if (
    //   cofRemainder === this.remainder ||
    //   cofBundleItems === this.remainder ||
    //   frequency.COF === this.remainder
    // )
    // {
    //   coffeeDeal = 1 * this.remainder
    //   console.log('coffeeDeal:', coffeeDeal)
    // }
    // //hopefully :)
    // const totalCost = coffeeDeal + cofRemainder
    // const fixedTotal = totalCost.toFixed(2)
    //   console.log('totalCost:', fixedTotal)
    //   return fixedTotal
  }

  calculateTotal() {
    let finalPrice = 0

    const priceTotals = []
    const frequency = {
      BGLO: 0,
      BGLP: 0,
      BGLE: 0,
      COF: 0
    }

    //Update frequency
    this.basket.forEach((item) => {
      if (item.sku === 'BGLO') {
        //increase count of item
        frequency.BGLO += 1
      } else if (item.sku === 'BGLP') {
        //increase count of item
        frequency.BGLP += 1
      } else if (item.sku === 'BGLE') {
        //increase count of item
        frequency.BGLE += 1
      } else if (item.sku === 'COF') {
        //increase count of item
        frequency.COF += 1
      }
    })
    priceTotals.push(Number(this.calculateBGLODiscount()))
    priceTotals.push(Number(this.calculateBGLEDiscount()))
    priceTotals.push(Number(this.calculateBGLPDiscount()))
    priceTotals.push(Number(this.calculateCOFDiscount()))

    for (let i = 0; i < priceTotals.length; i++) {
      finalPrice += priceTotals[i]
    }

    console.log('calculateTotal() finalPrice:', finalPrice.toFixed(2))

    return finalPrice.toFixed(2)
  }

  //   //Update to include discounts: Refactor names here and in .spec.js after tests pass
  //   calculateInitialTotal() {
  //     //refactor into helper function
  //     //Discount Check:
  //     //new object to check the frequency of each item
  //     const frequency = {
  //       BGLO: 0,
  //       BGLP: 0,
  //       BGLE: 0,
  //       COF: 0
  //     }

  //     //Update frequency
  //     this.basket.forEach((item) => {
  //       if (item.sku === 'BGLO') {
  //         //increase count of item
  //         frequency.BGLO += 1
  //       } else if (item.sku === 'BGLP') {
  //         //increase count of item
  //         frequency.BGLP += 1
  //       } else if (item.sku === 'BGLE') {
  //         //increase count of item
  //         frequency.BGLE += 1
  //       } else if (item.sku === 'COF') {
  //         //increase count of item
  //         frequency.COF += 1
  //       }
  //     })

  //     //check for appropriate ammounts of each, the let total per bundle = x + totalOfRemainders
  //     //notes: when one discount is appliued, the other is not. ie 12 bagles discoint > 1 bagel+1coffee discount
  //     //do an "isEven" type function then figure out what to do with remainer items
  //     //for each bundle: create frequency = 1 with cost of the relevant discount- maybe assign new 'item' with new price
  //     const bundleBasket = [] //arr of objects [itemBundle]
  //     const itemBundle = {
  //       quantity: 0,
  //       price: 0
  //     }

  //     //maybe use reduce
  //     if (frequency.BGLO % 6 === 0) {
  //       itemBundle.quantity += 1
  //       itemBundle.price = 2.49 * itemBundle.quantity
  //       bundleBasket.push(itemBundle)
  //     }
  //     //logic to handle remainders

  //     //remove discounted bagels from list once discount has been applied

  //     //OG function: if no discount to implement: might need some refactoring
  //     const priceList = []

  //     this.basket.map((cost) => {
  //       //convert string to number for calculations
  //       priceList.push(Number(cost.price))
  //     })

  //     let total = 0
  //     for (let i = 0; i < priceList.length; i++) {
  //       total += priceList[i]
  //     }

  //     return total
  //   }
}

// const basket = new Basket()
// basket.addToBasket('BGLO', 2)
// console.log("added item:", basket)

// const newBasket = new Basket()
// basket.removeFromBasket('BGLO')
// console.log("should be empty:", basket)
// newBasket.displayPrice('BGLO')

module.exports = {
  Basket
}

// // const basket = new Basket()
// basket.removeFromBasket('BGLO')
// console.log(basket)

// function calculateTotal() {
//   const priceTotals = []
//   let finalPrice = 0
//   priceTotals.push(Number(calculateBGLODiscount()))
//   priceTotals.push(Number(calculateBGLEDiscount()))
//   priceTotals.push(Number(calculateBGLPDiscount()))
//   priceTotals.push(Number(calculateCOFDiscount()))

//   for (let i = 0; i < priceTotals.length; i++) {
//     finalPrice += priceTotals[i]
//   }

//   console.log('calculateTotal() finalPrice:', finalPrice.toFixed(2))

//   return finalPrice.toFixed(2)
// }
// calculateTotal()
