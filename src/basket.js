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

  removeItem(sku) {}
}

module.exports = {
  Basket,
}
