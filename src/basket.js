class Basket {
  constructor() {
    this.orders = []
    this.id = 1
  }

  add(item) {
    const newOrder = new Order(this.id, item)
    this.id++
    this.orders.push(newOrder)
    return this.orders
  }
}

class Order {
  constructor(id, item) {
    this.id = id
    this.item = item
  }
}

export { Order }

export default Basket
