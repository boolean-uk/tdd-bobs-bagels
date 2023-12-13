const inventoryData = require('../inventory.json')
const inventory = JSON.parse(JSON.stringify(inventoryData.inventory))

// class Item{
//     constructor(name, price, variant) {
//         this.sku = inventory[0].sku
//         this.name = name
//         this.price = price
//         this.variant = variant
//     }
// }

class Basket {
  constructor() {
    this.items = []
    this.capacity = 5
  }

  addItem(sku) {
    const itemExists = this.items.find((item) => item.sku === sku)
    if (itemExists) {
      itemExists.quantity++
      return this.items
    }

    const newItem = inventory.find((item) => item.sku === sku)

    if (!newItem) return false

    newItem.quantity = 1
    this.items.push({ ...newItem })
    return this.items
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

module.exports = {
  Basket
}
