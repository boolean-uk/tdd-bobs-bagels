class BagelBasket {
  constructor(capacity = 7) {
    this.capacity = capacity
    this.items = []
  }

  addItem(item) {
    if (this.items.length < this.capacity) {
      this.items.push(item)
    } else {
      return 'Cannot add item, basket is full'
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

  findBagel(sku) {
    return (
      this.items.find((item) => item.sku === sku) ||
      'Item doesnt exist in basket'
    )
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + Number(item.price), 0)
  }
}

module.exports = BagelBasket
