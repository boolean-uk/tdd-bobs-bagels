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
      return 'bagel does not exist, check bagel sku'
    } else {
      const index = this.basketList.indexOf(removeBagel)
      this.basketList.splice(index, 1)
      return removeBagel
    }
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
console.log(b.addBagel('BGSS'))

// REMOVE BAGEL
// b.removeBagel('BGSS')
// console.log(b.removeBagel(undefined))

// GET BASKET
// console.log(b.getBasket())

module.exports = { Basket }
