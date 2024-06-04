const Item = require('./item')

class Basket {
  constructor(capacity = 5) {
    this.items = []
    this.capacity = capacity
  }

  addItem(item) {
    if (this.isFull()) {
      return 'Basket is full. Cannot add more items.'
    }
    this.items.push(item)
    return `Added ${item.name} to the basket.`
  }

  removeItem(itemName) {
    const index = this.items.findIndex((item) => item.name === itemName)
    if (index !== -1) {
      const removedItem = this.items.splice(index, 1)[0]
      return `Removed ${removedItem.name} from the basket.`
    }
    return 'Item not found in the basket.'
  }

  isFull() {
    return this.items.length >= this.capacity
  }
}

module.exports = Basket
