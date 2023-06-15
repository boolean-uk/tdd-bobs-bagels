import inventory from '../inventory.js'

class Basket {
  constructor() {
    this.items = []
  }

  getItemFromBasket(whichItem) {
    const item = this.items.find((item) => item.sku === whichItem)
    return item
  }

  addToBasket(whichBagel) {
    const item = inventory.find((item) => item.sku === whichBagel)
    if (!item) {
      return
    }
    const existingItem = this.getItemFromBasket(whichBagel)
    if (existingItem) {
      existingItem.quantity++
      return existingItem
    }
    item.quantity = 1
    this.items.push(item)
    return item
  }
}

export default Basket
