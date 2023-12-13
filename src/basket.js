class BagelBasket {
  constructor(capacity = 7) {
    this.capacity = capacity
    this.items = []
  }

  addItem(item) {
    if (this.items.length < this.capacity) {
      this.items.push(item)
    }
  }

  removeItem(itemToRemove) {
    const index = this.items.findIndex(
      (item) => item.name === itemToRemove.name
    )
    if (index === -1) {
      return 'Item not found'
    }
    this.items.splice(index, 1)
  }
}

module.exports = BagelBasket
