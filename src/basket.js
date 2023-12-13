const inventory = require('../inventory')

class Basket {
  constructor() {
    this.basketList = []
  }

  addItem(sku) {
    const itemToAdd = inventory.find((item) => item.sku === sku)
    if (!itemToAdd) return 'item not found'
    this.basketList.push(itemToAdd)
    return itemToAdd.name
  }
}

const basket = new Basket()
console.log(basket.addItem('BGLO'))

module.exports = Basket
