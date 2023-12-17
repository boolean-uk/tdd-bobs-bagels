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
}

module.exports = { ShoppingBasket }
