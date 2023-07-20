class Basket {
  constructor(capacity) {
    this.capacity = capacity
    this.items = new Map()
  }

  addItem (item) {
    if (this.items.has(item)) {
      this.items.set(item, this.items.get(item) + 1)
    } else {
      this.items.set(item, 1)
    }
  }

  removeItem (item) {
    if (this.items.has(item)) {
      this.items.set(item, this.items.get(item) - 1)
      if (this.items.get(item) <= 0) {
        this.items.delete(item)
      }
    } else {
      throw 'No such item in basket!'
    }
  }
}

module.exports = {
  Basket
}