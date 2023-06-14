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
}

export default Basket
