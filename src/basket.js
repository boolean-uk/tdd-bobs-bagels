class Basket {
  //Create a basket
  constructor(capacity) {
    this.items = []
    this.capacity = capacity
  }

  addItem(name) {
    const isFull = this.items.length >= this.capacity
    if (isFull) {
      return 'You can not add an item'
    }
    //check if we have
    const item = this.items.find((item) => item.name === name)
    //if exists
    if (item) {
      item.quantity += 1
    } else {
      this.items.push({ name: name, quantity: 1 })
    }

    return this.items
  }
}
module.exports = Basket
