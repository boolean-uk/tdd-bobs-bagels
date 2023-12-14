class Basket {
  constructor ( capacity ) {
    this.capacity = capacity
    this.items = []
  }

  countItems () {
    return this.items.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)
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
      this.items[position].quantity = this.items[position].quantity + 1 
    }
    return true
  }

  removeItem (itemObj) {
    if (this.itemInBasket(itemObj) === false) {
      console.log("you don't have that item in your basket")
      return false
    }
    
    this.items = this.items.filter(item => item.sku !== itemObj.sku)
    return true
  }
}

export default Basket