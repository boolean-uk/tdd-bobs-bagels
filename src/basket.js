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

  remove(id) {
    const orderId = this.orders.findIndex((order) => order.id === id)
    this.orders.splice(orderId, 1)
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
