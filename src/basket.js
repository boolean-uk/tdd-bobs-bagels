const { bagelsInventory } = require('../inventory.json')

class Basket {
  constructor() {
    this.basketList = []
    this.maxCapacity = 6
    this.currentCapacity = 0
  }

  getBasket() {
    if (this.basketList.length === 0) {
      return []
    } else {
      return this.basketList
    }
  }

  addBagel(bagelType) {
    if (this.currentCapacity === this.maxCapacity) {
      return 'basket is full of bagels!'
    } else {
      const bagelToAdd = bagelsInventory.find(
        (bagel) => bagel.sku === bagelType
      )
      if (!bagelToAdd) {
        return 'bagel does not exist in our bakery'
      } else {
        const isBagelInBasket = this.basketList.find(
          (bagel) => bagel === bagelToAdd
        )
        if (!isBagelInBasket) {
          bagelToAdd.quantity = 1
          this.currentCapacity++
          this.basketList.push(bagelToAdd)
        } else {
          bagelToAdd.quantity++
          this.currentCapacity++
        }
      }
      return bagelToAdd
    }
  }

  removeBagel(bagelType) {
    const removeBagel = this.basketList.find((bagel) => bagel.sku === bagelType)
    if (!removeBagel) {
      return 'bagel does not exist in basket'
    } else {
      const index = this.basketList.indexOf(removeBagel)
      this.basketList.splice(index, 1)
      return removeBagel
    }
  }

  largerBasket(newCapacity) {
    if (typeof newCapacity === 'number' && newCapacity <= this.maxCapacity) {
      return 'new capacity must be greater than current maximum capacity'
    } else if (typeof newCapacity !== 'number') {
      return 'enter a valid number to increase basket capacity'
    } else this.maxCapacity = newCapacity
    return `basket capacity is now ${newCapacity}`
  }

  checkPrice(bagelType) {
    const bagelToCheck = bagelsInventory.find(
      (bagel) => bagel.sku === bagelType
    )
    if (!bagelToCheck) return 'bagel does not exist'
    else
      return `the price of the ${bagelToCheck.variant} ${bagelToCheck.name} is £${bagelToCheck.price}`
  }

  // basketHasSpecialOffers() {
  //   const updatedBasket = this.basketList.map((bagel) => {
  //     if (bagel.sku === 'BGLO' && bagel.quantity > 5) {
  //       return bagel.quantity
  //     } else return bagel
  //   })
  //   return updatedBasket
  // }

  calcBasketVal() {
    if (this.basketList.length === 0) {
      return 'there are no bagels in your basket'
    }
    const basketPrices = this.basketList.map(
      (bagel) => bagel.price * bagel.quantity
    )
    const sum = basketPrices.reduce((acc, curr) => acc + curr).toFixed(2)
    return `the price of your basket is £${sum}`
  }
}

// CONSOLE.LOG TEST
// INITIAL
const b = new Basket()

// ADD BAGEL
b.addBagel('BGLO')
b.addBagel('BGLO')
b.addBagel('BGLO')
b.addBagel('BGLO')
b.addBagel('BGLO')
b.addBagel('BGLO')
// b.addBagel('BGLO')
// b.addBagel('BGLP')
// b.addBagel('BGLS')
console.log(b.addBagel('BGLO'))
// console.log(b.addBagel('BGLO'))

// REMOVE BAGEL
// b.removeBagel('BGSS')
// console.log(b.removeBagel(undefined))

// GET BASKET
console.log(b.getBasket())

// INCREASE BASKET CAPACITY
// console.log(b.largerBasket(5))
// console.log(b.maxCapacity)

// CHECK BAGEL PRICE
// console.log(b.checkPrice('BGLO'))
// b.checkPrice('BGLO')

// CALC BASKET TOTAL
// console.log(b.calcBasketVal())

// SPECIAL OFFERS
// console.log(b.basketHasSpecialOffers())

module.exports = { Basket }
