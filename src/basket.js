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
}

module.exports = BagelBasket
