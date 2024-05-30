class Basket {
  constructor() {
    this.orders = []
    this.id = 1
    this.maxCapacity = 10
    this.items = {
      "plain bagel": 0.25,
      "blueberry bagel": 0.30,
      "garlic bagel": 0.35,
      "sesame bagel": 0.20,
      "oat bagel": 0.40,
      "cheddar bagel": 0.45,
      "egg bagel": 0.25,
      "asiago bagel": 0.50,
      "multigrain bagel": 0.25,
      "chocolate bagel": 0.20,
      "rainbow bagel": 0.35
    }
  }

  add(item) {
    if (typeof item !== 'string') {
      throw new Error('order not string provided')
    }

    const orderFoundInItems = Object.keys(this.items).find(
      (order) => order.trim().toLowerCase() === item.trim().toLowerCase()
    ) 

    const orderFoundInBasket = this.orders.find(order => order.item.toLowerCase() === item.trim().toLowerCase())

    if (orderFoundInBasket) {
      orderFoundInBasket.quantity++
      orderFoundInBasket.price = this.items[item] * orderFoundInBasket.quantity

      return this.orders
    } 
    
    if (!orderFoundInItems) {
      throw new Error('item not found')
    }

    if (this.orders.length >= this.maxCapacity) {
      return 'The basket is full'
    }

    const newOrder = new Order(this.id++, item, this.items[item], 1)
    this.orders.push(newOrder)

    return this.orders
  }

  remove(id) {
    const orderId = this.orders.findIndex((order) => order.id === id)

    if (orderId === -1) {
      throw new Error('order not found')
    }

    this.orders.splice(orderId, 1)
    return this.orders
  }

  checkPrice() {
    return this.items
  }

  totalPrice() {
    let total = 0

    this.orders.forEach((order) => {
      total += order.price
    })

    return total
  }
}

class Order {
  constructor(id, item, price, quantity) {
    this.id = id
    this.item = item
    this.price = price
    this.quantity = quantity
  }
}

export { Order }

export default Basket
