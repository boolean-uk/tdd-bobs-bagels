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

  removeItemFromBasket(bagelType) {
    const bagelToRemove = this.basketList.find(
      (bagel) => bagel.sku === bagelType
    )
    if (!bagelToRemove) {
      return 'first add bagel in the basket'
    } else {
      const index = this.basketList.indexOf(bagelToRemove)
      this.basketList.splice(index, 1)
      return bagelToRemove
    }
  }
}

const b = new Basket()
console.log('your order is', b.addItemToBasket('BGLO'))
console.log('your order is', b.addItemToBasket('BGLE'))
console.log('your order is', b.addItemToBasket('BGLE'))

console.log('your order is', b.removeItemFromBasket('BGLE'))
console.log('your order is', b.removeItemFromBasket('BGLE'))
console.log(b.getBasket())
module.exports = {
  Basket
}
