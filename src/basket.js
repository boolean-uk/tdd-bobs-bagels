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
}

export { Item, Basket }
