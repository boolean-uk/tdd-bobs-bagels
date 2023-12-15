const { inventory } = require('../inventory.json')
class Basket {
  constructor() {
    this.basketList = []
    this.maxCapacity = 5
  }

  addItemToBasket(bagelType) {
    if (this.basketList.length >= this.maxCapacity) {
      return 'Basket is Full!!cannot add more bagels!'
    } else {
      const bagelToAdd = inventory.find((bagel) => bagel.sku === bagelType)
      if (!bagelToAdd) {
        return `No bagels found`
      } else {
        this.basketList.push(bagelToAdd)
        return bagelToAdd
      }
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

  increaseBasket(maxNumber) {
    if (typeof maxNumber !== 'number' && maxNumber <= this.maxCapacity) {
      return 'Enter a bigger number than current max capacity'
    } else if (!maxNumber) {
      return 'Please enter a valid number'
    } else this.maxCapacity = maxNumber
    return `now max capacity is ${maxNumber}`
  }
}

const b = new Basket()
console.log(b.increaseBasket(10))

console.log('basket', b.addItemToBasket('BGLO'))
console.log('basket', b.addItemToBasket('BGLO'))
console.log('basket', b.addItemToBasket('BGLO'))
console.log('basket', b.addItemToBasket('BGLO'))
console.log('basket', b.addItemToBasket('BGLO'))
console.log('basket', b.addItemToBasket('BGLO'))
console.log('basket', b.addItemToBasket('BGLO'))
console.log('basket', b.addItemToBasket('BGLO'))
console.log('basket', b.addItemToBasket('BGLO'))
console.log('basket', b.addItemToBasket('BGLO'))
console.log('basket', b.addItemToBasket('BGLO'))

console.log(b.getBasket())
module.exports = {
  Basket
}
