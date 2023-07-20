const data = require('../inventory.json')
const inventory = data.inventory

class Basket {
  constructor(capacity) {
    this.capacity = capacity
    this.contents = []
  }

  isEmpty() {
    return this.contents.length === 0
  }

  getItemsCount() {
    return this.contents.length
  }

  getItemQuantity(product) {
    return this.contents.filter((item) => item.sku === product.sku).length
  }

  _getLeftCapacity() {
    return this.capacity - this.getItemsCount()
  }

  isBasketFull() {
    return this._getLeftCapacity() === 0
  }

  addItem(product, quantity) {
    if (inventory.findIndex((item) => item.sku === product.sku) === -1) {
      throw new Error("Can't add an item that is not in the inventory")
    }
    if (quantity < 0) {
      throw new Error("Can't add negative amount of products to basket")
    }
    if (this.isBasketFull()) {
      throw new Error('Basket is full!!!')
    }
    if (this._getLeftCapacity() - quantity < 0) {
      throw new Error(
        `Can't add as more than ${this._getLeftCapacity()} items to basket`
      )
    }

    for (let i = 0; i < quantity; i++) {
      this.contents.push(product)
    }
  }

  removeItem(product, quantity) {
    if (quantity < 0) {
      throw new Error("Can't remove negative amount of products from basket")
    }
    if (this.getItemQuantity(product) === 0) {
      throw new Error("Can't remove an item that is not in the basket")
    }
    if (this.getItemQuantity(product) - quantity < 0) {
      throw new Error(
        `Can't remove as more than ${this.getItemQuantity(
          product
        )} items from basket`
      )
    }

    for (let i = 0; i < quantity; i++) {
      const index = this.contents.findIndex((item) => item.sku === product.sku)
      this.contents.splice(index, 1)
    }
  }

  getTotalPrice() {
    const price = this.contents.reduce((total, item) => {
      return total + parseFloat(item.price)
    }, 0)
    return parseFloat(price.toFixed(2))
  }

  setCapacity(capacity) {
    this.capacity = capacity
  }
}

module.exports = Basket
