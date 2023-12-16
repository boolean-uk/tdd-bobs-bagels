class Basket {
  constructor() {
    this.items = []
  }

  additemtoBasket(item) {
    if (item instanceof Item) {
      this.items.push(item)
      return true
    }
    return false
  }

  removeitemfromBasket(item) {
    const index = this.items.indexOf(item)
    if (index !== -1) {
      this.items.splice(index, 1)
      return true
    }
    return false
  }
}

class Item {
  constructor(item) {
    this.sku = item.sku
    this.price = item.price
    this.name = item.name
    this.variant = item.variant
  }
}
module.exports = { Basket, Item }
