const importJsonInventory = require('../inventory.json')
const inventory = importJsonInventory.inventory

class Basket {
  constructor(basketQuantity = 10) {
    this.basketQuantity = basketQuantity
    this.items = []
  }

  addItem(sku) {
    const item = inventory.find((item) => item.sku === sku)
    if (item && this.items.length < this.basketQuantity) {
      if (this.items.includes(item)) {
        item.quantity++
        return item
      }
      item.quantity = 1
      this.items.push(item)
      return item
    }
    return false
  }

  deleteItem(sku) {
    const item = this.items.find((item) => item.sku === sku)
    if (item) {
      const itemIndex = this.items.indexOf(item)
      this.items.splice(itemIndex, 1)
      return item
    }
    return false
  }
}

const testBasket = new Basket()
testBasket.addItem('BGLE')
testBasket.addItem('BGLE')
testBasket.addItem('BGLE')
testBasket.addItem('COF')
console.log(testBasket.items)
console.log(testBasket.addItem('BGLE'))

module.exports = Basket
