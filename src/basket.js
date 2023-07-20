class Basket {
  constructor(capacity) {
    this.capacity = capacity
    this.items = []
  }

  // get items() {
  //   return this.items
  // }

  addItem (item) {
    this.items.push(item)
  }
}

module.exports = {
  Basket
}