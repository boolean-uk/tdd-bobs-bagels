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
}

export { Item, Basket }
