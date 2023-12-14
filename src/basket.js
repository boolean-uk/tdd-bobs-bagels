const { inventory } = require('../inventory.json')
class Basket {
  constructor() {
    this.basketList = []
  }

  addItemToBasket(bagelType) {
    const bagelToAdd = inventory.find((bagel) => bagel.sku === bagelType)
    if (!bagelToAdd) {
      return `No bagels found`
    } else {
      this.basketList.push(bagelToAdd)
      return bagelToAdd
    }
  }

  getBasket() {
    if (this.basketList === 0) {
      return []
    } else {
      return this.basketList
    }
  }
}

const b = new Basket()
console.log('your order is', b.addItemToBasket('BGLP'))
module.exports = {
  Basket
}
