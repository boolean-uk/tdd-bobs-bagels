import { inventory } from '../inventory.js'

export default class Basket {
  constructor() {
    this.basketList = []
    this.basketSize = 12
  }

  addItem(sku) {
    if (!sku || typeof sku !== 'string') return 'sku required!'
    const itemToAdd = inventory.find((item) => item.sku === sku)
    if (!itemToAdd) return 'item not found'
    if (this.checkIfFull() === 'basket is full') return this.checkIfFull()
    itemToAdd.quantity = 1
    this.basketList.push(itemToAdd)
    return itemToAdd.name
  }

  removeItem(sku) {
    if (!sku || typeof sku !== 'string') return 'sku required!'
    const newBasket = this.basketList.filter((item) => item.sku !== sku)
    return (this.basketList = newBasket)
  }

  checkIfFull() {
    let sum = 0
    this.basketList.forEach((item) => {
      sum += item.quantity
      return sum
    })
    if (sum === this.basketSize) return 'basket is full'
  }
}

const basket = new Basket()

basket.checkIfFull()
