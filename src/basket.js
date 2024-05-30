// Part One, Two

class Item {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  displayPrice() {
    return this.price
  }
}

class Basket {
  constructor(capacity = 3) {
    // default capacity at 3 for test
    this.items = []
    this.capacity = capacity
  }

  add(item) {
    if (this.items.length >= this.capacity) {
      throw new Error('Basket is full')
    }
    this.items.push(item)
    return this.items
  }

  remove(item) {
    if (this.items.length === 0) {
      throw new Error('Basket is empty')
    }
    const index = this.items.indexOf(item)
    if (index !== -1) {
      this.items.splice(index, 1)
      return item
    }
    return null // Return null if they're no items in the basket
  }

  basketisFull() {
    return this.items.length >= this.capacity // Full if there is more than the set capacity
  }

  adjustCapacity(newCapacity) {
    if (newCapacity < this.items.length) {
      throw new Error(
        'New capacity cannot be less than the number of items in the basket'
      )
    }
    this.capacity = newCapacity
  }
}

export { Item, Basket }
