class ShoppingBasket {
  constructor(capacity = 7) {
    this.capacity = capacity
    this.items = []
  }
  addItem(item) {
    if (this.isBasketFull()) {
      console.log('Cannot add item, basket is full')
    } else {
      this.items.push(item)
    }
  }
  removeItem(itemToRemove) {
    const index = this.items.findIndex(
      (item) => item.name === itemToRemove.name
    )
    if (index !== -1) {
      this.items.splice(index, 1)
    } else {
      return 'Item not found'
    }
  }
}

module.exports = { ShoppingBasket }
