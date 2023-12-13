const { bagelsInventory } = require('../inventory.json')

class Basket {
  constructor() {
    this.basketList = []
  }

  getBasket() {
    if (this.basketList.length === 0) {
      return []
    } else {
      return this.basketList
    }
  }

  addBagel(bagelType) {
    const bagelToAdd = bagelsInventory.find((bagel) => bagel.sku === bagelType)
    if (!bagelToAdd) {
      return 'bagel does not exist, check bagel sku'
    } else {
      this.basketList.push(bagelToAdd)
      return bagelToAdd
    }
  }
}

const b = new Basket()
// b.addBagel('BGSS')
console.log(b.addBagel('BGSS'))
console.log(b.getBasket())

module.exports = { Basket }
