// Part One

class Item {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

class Basket {
  constructor() {
    this.items = []
  }

  add(item) {
    this.items.push(item)
    return this.items
  }

  remove(item) {
    const index = this.items.indexOf(item)
    if (index !== -1) {
      this.items.splice(index, 1)
      return item
    }
    return null // Return null if they're no items in the basket
  }
}

export { Item, Basket }
