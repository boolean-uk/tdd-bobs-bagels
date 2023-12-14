const fs = require('fs')

class Item {
  constructor(itemData) {
    this.sku = itemData.sku
    this.price = itemData.price
    this.name = itemData.name
    this.variant = itemData.variant || ''
    this.quantity = 1
    this.fillings = itemData.fillings || []
  }
}

class Basket {
  constructor(capacity = 10) {
    this.items = []
    this.capacity = capacity
    this.inventory = this.loadInventoryData()
  }

  loadInventoryData() {
    try {
      const data = fs.readFileSync('./inventory.json')
      return JSON.parse(data).inventory
    } catch (error) {
      console.error('Error reading inventory data:', error.message)
      return []
    }
  }

  addItem(sku) {
    if (this.items.length >= this.capacity) {
        console.warn('Basket is full. Cannot add more items.')
        return false
    }
    const itemData = this.inventory.find((item) => item.sku === sku)

    if (itemData) {
      const existingItem = this.items.find((item) => item.sku === sku)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        const newItem = new Item(itemData)
        this.items.push(newItem)
      }
      return true
    } else {
      return false
    }
  }

  removeItem(sku) {
    const itemIndex = this.items.findIndex((item) => item.sku === sku)
    if (itemIndex === -1) {
      return false
    }
    this.items[itemIndex].quantity--
    if (this.items[itemIndex].quantity === 0) {
      this.items.splice(itemIndex, 1)
    }
    return this.items
  }

  setBasketCapacity(newCapacity) {
    this.capacity = newCapacity
  }
}

module.exports = { Basket, Item }
