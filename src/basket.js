const inventory = require("../inventory.json")

class Basket {
  #capacity
  #items
  #inventory

  constructor(capacity) {
    this.#capacity = capacity
    this.#items = new Map()
    this.#inventory = inventory.inventory
  }

  get capacity() {
    return this.#capacity
  }

  get items() {
    return this.#items
  }

  getItemBySku(sku) {
    return this.#inventory.filter((el) => el.sku === sku)[0]
  }

  addItem (sku) {
    this.checkIfBasketIsFull()
    const item = this.getItemBySku(sku)
    if (this.items.has(item)) {
      this.items.set(item, this.items.get(item) + 1)
    } else {
      this.items.set(item, 1)
    }
  }

  removeItem (sku) {
    const item = this.getItemBySku(sku)
    if (this.items.has(item)) {
      this.items.set(item, this.items.get(item) - 1)
      if (this.items.get(item) <= 0) {
        this.items.delete(item)
      }
    } else {
      throw 'No such item in basket!'
    }
  }

  checkIfBasketIsFull() {
    const numOfItemsInBasket = Array.from(this.items.values()).reduce((sum, el) => sum + el, 0)
    if (numOfItemsInBasket >= this.capacity) {
      throw 'Basket is full!'
    }
  }

  checkPrice(sku) {
    const item = this.getItemBySku(sku)
    return item.price
  }

  getTotalPrice() {
    // let totalPrice = 0
    // for (let item of this.items.keys()) {
    //   totalPrice += item.price * this.items.get(item)
    // }
    // return totalPrice

    for (let [key, value] of this.items.entries()) {
      let sixBagels = value / 6
      // totalPrice +=   
    }



  }


}

module.exports = {
  Basket
}