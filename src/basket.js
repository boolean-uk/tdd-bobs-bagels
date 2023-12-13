const { bagelsInventory } = require('../inventory.json')

class Basket {
  constructor() {
    this.basketList = []
    this.maxCapacity = 3
  }

  getBasket() {
    if (this.basketList.length === 0) {
      return []
    } else {
      return this.basketList
    }
  }

  addBagel(bagelType) {
    if (this.basketList.length === this.maxCapacity) {
      return 'basket is full of bagels!'
    } else {
      const bagelToAdd = bagelsInventory.find(
        (bagel) => bagel.sku === bagelType
      )
      if (!bagelToAdd) {
        return 'bagel does not exist, check bagel sku'
      } else {
        this.basketList.push(bagelToAdd)
        return bagelToAdd
      }
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
}

// CONSOLE.LOG TEST
// INITIAL
const b = new Basket()

// ADD BAGEL
b.addBagel('BGSS')
b.addBagel('BGLO')
// b.addBagel('BGSE')
// b.addBagel('BGLS')
// console.log(b.addBagel('BGSS'))

// REMOVE BAGEL
// b.removeBagel('BGSS')
// console.log(b.removeBagel(undefined))

// GET BASKET
// console.log(b.getBasket())

// INCREASE BASKET CAPACITY
// console.log(b.largerBasket(5))
// console.log(b.maxCapacity)

// CHECK BAGEL PRICE
console.log(b.checkPrice('BGLO'))
// b.checkPrice('BGLO')

module.exports = { Basket }
