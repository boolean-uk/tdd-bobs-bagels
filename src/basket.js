import { inventory } from '../inventory.js'

export default class Basket {
  constructor() {
    this.basketList = []
    this.basketSize = 12
    this.basketisFull = false
  }

  addItem(sku) {
    if (!sku || typeof sku !== 'string') return 'sku required!'
    const itemToAdd = inventory.find((item) => item.sku === sku)
    if (!itemToAdd) return 'item not found'
    if (this.basketisFull) return this.checkIfFull()
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
    if (sum === this.basketSize) 
    this.basketisFull = true
    return 'basket is full'
  }

  changeBasketSize(size){
   return this.basketSize = size
  } 
 
}

const basket = new Basket()

basket.checkIfFull()
