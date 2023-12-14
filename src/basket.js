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

  checkForItemToRemove(item) {
    const searchResult = this.list.find((i) => i.sku === item.sku)

    if (!searchResult || searchResult.length < 1) {
      return 'no such item in the basket!'
    }
    return item
  }
}

class BasketItem {
  constructor(inventoryItem) {
    this.sku = inventoryItem.sku
    this.price = inventoryItem.price
    this.name = inventoryItem.name
    this.variant = inventoryItem.variant
  }
}

module.exports = {
  Basket,
  BasketItem
}
