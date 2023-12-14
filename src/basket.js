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
  constructor() {
    this.items = []
    this.inventory = this.loadInventoryData()
  }

  loadInventoryData() {
    try {
      const data = fs.readFileSync('./inventory.json', 'utf-8')
      return JSON.parse(data).inventory
    } catch (error) {
      console.error('Error reading inventory data:', error.message)
      return []
    }
  }

  addItem(sku) {
    const itemData = this.inventory.find(item => item.sku === sku)

    if (itemData) {
      const existingItem = this.items.find(item => item.sku === sku)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        const newItem = new Item(itemData)
        this.items.push(newItem)
      }
      return true // Indicate successful addition
    } else {
      return false // Indicate item not found in inventory
    }
  }

  removeItem(sku) {
    const itemIndex = this.items.findIndex((item) => item.sku === sku)
    if (itemIndex === -1) {
      return false
    }

    this.items[itemIndex].quantity--
    if (itemIndex <= 0) {
      this.items.splice(itemIndex, 1)
    }
    return this.items
  }
}

module.exports = { Basket, Item }
