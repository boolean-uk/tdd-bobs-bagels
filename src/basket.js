class Basket {
  constructor ( capacity ) {
    this.capacity = capacity
    this.items = []
  }

  isFull () {
    return this.items.length < this.capacity
  }

  addItem (itemObj) {
    this.items.push(itemObj)
  }

  removeItem (itemObj) {
    this.items = this.items.filter(item => item.sku !== itemObj.sku)
  }
}

export default Basket