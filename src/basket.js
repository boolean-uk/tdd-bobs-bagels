import inventory from '../inventory.js'

class Basket {
  constructor() {
    this.items = []
  }

  addToBasket(whichBagel) {
    const item = inventory.find((item) => item.sku === whichBagel)
    if (item !== undefined) {
      item.quantity = 1
      this.items.push(item)
      console.log('basket after add', this.items)
      return item
    }
  }
  removeFromBasket() {
    const removeItem = this.items.find((item) => item.sku === sku)

    if (removeItem !== undefined) {
      if (removeItem.quantity > 1) {
        removeItem.quantity
      }
    }
  }
}

export default Basket
