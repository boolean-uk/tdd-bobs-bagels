class Basket {
  constructor(capacity) {
    this.capacity = capacity
    this.items = new Map()
  }

  addItem (item) {
    this.checkIfBasketIsFull()
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

  checkIfBasketIsFull() {
    const numOfItemsInBasket = Array.from(this.items.values()).reduce((sum, el) => sum + el, 0)
    if (numOfItemsInBasket >= this.capacity) {
      throw 'Basket is full!'
    }
  }
}

module.exports = {
  Basket
}