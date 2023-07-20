class Basket {
  constructor() {
    this.basket = []
    this.capacity = 24
  }

  addItemToBasket(item) {
    if (typeof item !== 'object') {
      console.error('Cannot add item, Invalid input.')
      return false
    }

    if (this.basket.length === this.capacity) {
      console.error('Cannot add item, Basket is full.')
      return false
    }

    this.basket.push(item)
    return true
  }

  removeItemFromBasket(item) {
    if (typeof item !== 'object') {
      console.error('Cannot remove item, Invalid input.')
      return false
    }

    if (!this.basket.includes(item)) {
      console.error('Cannot remove item, Basket does not contain that item.')
      return false
    }

    this.basket.splice(this.basket.indexOf(item), 1)
    return true
  }

  setBasketCapacity(capacity) {
    this.capacity = capacity
    return true
  }

  getItemPrice(item) {
    return item.price
  }

  calculateTotal() {
    let total = 0
    this.basket.forEach((item) => {
      const num = Number(item.price)
      total += num
    })

    return total.toFixed(2).toString()
  }
}

module.exports = {
  Basket
}
