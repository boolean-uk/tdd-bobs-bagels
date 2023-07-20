const { inventory } = require('../inventory.json')

class Basket {
  constructor() {
    this.shoppingList = []
  }

  add(sku) {
    const itemToAdd = inventory.find((item) => item.sku === sku)
    if (itemToAdd) {
      const inShoppingList = this.shoppingList.find((item) => item.sku === sku)
      if (inShoppingList) {
        inShoppingList.quantity++
      } else this.shoppingList.push({ ...itemToAdd, quantity: 1 })
    }
    return this.shoppingList
  }
  remove(sku) {
    const itemToRemove = this.shoppingList.find((item) => item.sku === sku)
    if (!itemToRemove) return 'item doesnt exist in basket'
    else if (itemToRemove.quantity > 1) itemToRemove.quantity--
    else {
      this.shoppingList.splice(this.shoppingList.indexOf(itemToRemove), 1)
    }
    return this.shoppingList
  }
}

module.exports = { Basket }
