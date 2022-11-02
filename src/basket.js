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

  editItem(sku, obj) {
    const item = this.items.find((item) => item.sku === sku)
    const objKey = Object.keys(obj)[0]
    const objValue = Object.values(obj)[0]
    if (item) {
      const itemIndex = this.items.indexOf(item)
      this.items[itemIndex][objKey] = objValue
      if (this.items[itemIndex].quantity === 0) {
        try {
          return this.items[itemIndex]
        } finally {
          this.deleteItem('BGLE')
        }
      }
      return this.items[itemIndex]
    }
    return false
  }

  isFull() {
    const quantityInBasket = this.items.reduce(
      (runningTotal, item) => item.quantity + runningTotal,
      0
    )
    const isBasketFull = quantityInBasket === this.basketQuantity
    if (isBasketFull) {
      return true
    }
    return false
  }

  searchBasket(sku) {
    const item = this.items.find((item) => item.sku === sku)
    if (item) {
      return item
    }
    return false
  }

  getTotalPrice() {
    console.log(this.items)
    return this.items.reduce(
      (runningTotal, item) => item.price * item.quantity + runningTotal,
      0
    )
  }
}

const testBasket = new Basket()
testBasket.addItem('BGLE')
console.log(testBasket.editItem('BGLE', { quantity: 0 }))

module.exports = Basket
