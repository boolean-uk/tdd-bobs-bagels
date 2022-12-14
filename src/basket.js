const { inventory } = require('../inventory.json')

class Basket {
  constructor() {
    this.basketSize = 10
    this.basket = []
  }

  isBasketFull() {
    if (this.basket.length === this.basketSize) return true
    else return false
  }

  isInInventory(sku) {
    // Returns Item
    const item = inventory.filter((item) => item.sku === sku)[0]
    if (item === undefined) return false
    else return item
  }

  isInBasket(sku) {
    // Returns Index
    const item = this.basket.filter((item) => item.sku === sku)[0]
    if (item === undefined) return false
    else return this.basket.indexOf(item)
  }

  addBagel(sku) {
    // Check if basket is full
    if (this.isBasketFull()) return false

    // Check if in Inventory
    const item = this.isInInventory(sku)
    if (!item) return false

    // Check if in Basket
    const indexInBasket = this.isInBasket(sku)
    if (indexInBasket) {
      // In Basket - Increase quantity
      const itemInBasket = this.basket[indexInBasket]
      const newQuantity = itemInBasket.quantity + 1
      const itemData = {
        ...itemInBasket,
        quantity: newQuantity,
        stockPrice: newQuantity * itemInBasket.price
      }
      this.basket[indexInBasket] = itemData
    } else {
      // Not in Basket - New
      const itemData = {
        sku: item.sku,
        price: item.price,
        name: item.name,
        variant: item.variant,
        quantity: 1,
        stackPrice: item.price
      }
      this.basket.push(itemData)
      return this.basket
    }
  }
}

module.exports = {
  Basket
}
