import { inventory } from '../inventory.js'

export default class Basket {
  constructor() {
    this.basketList = []
  }

  addItem(sku) {
    if (!sku || typeof sku !== 'string') return 'sku required!'
    const itemToAdd = inventory.find((item) => item.sku === sku)
    if (!itemToAdd) return 'item not found'
    this.basketList.push(itemToAdd)
    return itemToAdd.name
  }

  removeItem(sku) {
    if (!sku || typeof sku !== 'string') return 'sku required!'
    const newBasket = this.basketList.filter((item) => item.sku !== sku)
    return (this.basketList = newBasket)
  }
  
}

// const basket = new Basket()
// basket.addItem('BGLO')
// basket.addItem('BGLS')
// console.log(basket)
// basket.removeItem('BGLO')
// console.log(basket)
