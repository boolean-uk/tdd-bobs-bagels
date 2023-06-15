import inventory from '../inventory.js'

class Basket {
  constructor() {
    this.items = []
    this.amount = 2
    this.totalBasketQuantity = 0
  }

  getItemFromBasket(whichItem) {
    const item = this.items.find((item) => item.sku === whichItem)
    return item
  }

  addToBasket(whichBagel) {
    console.log('A2B start:', this.totalBasketQuantity)
    if (this.totalBasketQuantity === this.amount) {
      return 'basket is full'
    }

    const item = inventory.find((item) => item.sku === whichBagel)
    if (!item) {
      return
    }
    const existingItem = this.getItemFromBasket(whichBagel)
    if (existingItem) {
      existingItem.quantity++
      this.totalBasketQuantity++
      return existingItem
    }
    item.quantity = 1
    this.items.push(item)
    this.totalBasketQuantity++
    return item
  }

  removeFromBasket(sku) {
    const removeItem = this.items.find((item) => item.sku === sku)
    if (!removeItem) {
      return
    }
    const existingItem = this.getItemFromBasket(sku)
    if (existingItem) {
      existingItem.quantity--
      this.totalBasketQuantity--
      return existingItem
    }
    this.items.pop()
    this.totalBasketQuantity--
    return removeItem
  }
}

export default Basket
