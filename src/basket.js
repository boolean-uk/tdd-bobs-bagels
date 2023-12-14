class Basket {
  constructor ( capacity ) {
    this.capacity = capacity
    this.items = []
  }

  isFull () {
    const numOfItems = this.items.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)
    return numOfItems >= this.capacity
  }

  checkTotal () {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0)
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
    
    if (this.itemInBasket(itemObj) === false) {
      this.items.push({ ...itemObj, quantity: 1 })
    } else {
      const position = this.items.findIndex(item => item.sku === itemObj.sku)
      console.log(position, "found index")
    }
    return true
  }

  removeItem (itemObj) {
    this.items = this.items.filter(item => item.sku !== itemObj.sku)
    return true
  }
}

export default Basket