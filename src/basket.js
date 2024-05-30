class Basket {
  constructor() {
    this.orders = []
    this.id = 1
    this.maxCapacity = 10
  }

  add(item) {
    if (typeof item !== 'string') {
      throw new Error('item not string provided')
    } else if (item === '' || item.length < 3) {
      throw new Error('string not valid')
    }
    const newOrder = new Order(this.id, item)
    this.id++
    this.orders.push(newOrder)

    if (this.orders.length <= this.maxCapacity) {
      return this.orders
    }

    return 'The basket is full'
  }

  remove(id) {
    const orderId = this.orders.findIndex((order) => order.id === id)
    if (orderId === -1) {
      throw new Error("order doesn't exist")
    }
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
