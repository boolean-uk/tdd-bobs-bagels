class Basket {
  constructor ( capacity ) {
    this.capacity = capacity
    this.items = []
  }

  isFull () {
    return this.items.length >= this.capacity
  }

  changeCapacity (newCapacity) {
    if (this.items.length > newCapacity) return false
    this.capacity = newCapacity
    return true
  }

  itemInBasket (itemObj) {
    return !!this.items.filter(item => item.sku === itemObj.sku).length
  }

  addItem (itemObj) {
    if (this.isFull() === true) {
      console.log("Your basket is full!")
      return false
    }
    
    this.items.push({ ...itemObj, quantity: 1 })
    return true
  }

  removeItem (itemObj) {
    this.items = this.items.filter(item => item.sku !== itemObj.sku)
    return true
  }
}

export default Basket