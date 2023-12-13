class Basket {
  constructor(arrayOfItems, capacity) {
    this.list = arrayOfItems
    this.capacity = capacity
  }

  addToBasket(item) {
    if (this.list.find((i) => i.sku === item.sku)) {
      return 'this item is already in your basket!'
    }
    this.list.push(item)
    return this.list
  }

  removeItem(item) {
    if (this.list.length < 1) {
      return 'nothing to remove, your basket is empty'
    }
    const indexOfItemToRemove = this.list.indexOf(item)
    this.list.splice(indexOfItemToRemove, 1)
    return this.list
  }

  isBasketFull() {
    if (this.capacity === this.list.length) {
      return `the basket is full! (${this.list.length}/${this.capacity})`
    }
    return `the basket is not full yet (${this.list.length}/${this.capacity})`
  }

  setCapacity(num) {
    if (!num || typeof num !== 'number' || num < 1) {
      return `invalid number - capacity remains ${this.capacity}`
    }
    this.capacity = num
    return { list: this.list, capacity: this.capacity }
  }
}

class BasketItem {
  constructor(sku, price, name, variant) {
    this.sku = sku
    this.price = price
    this.name = name
    this.variant = variant
  }
}

module.exports = {
  Basket,
  BasketItem
}
