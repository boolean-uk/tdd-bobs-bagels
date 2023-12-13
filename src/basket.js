import { inventory } from '../inventory.js'

export default class Basket {
  constructor() {
    this.basketList = []
  }

  addItem(sku) {
    if (!sku) return 'sku required!'
    const itemToAdd = inventory.find((item) => item.sku === sku)
    if (!itemToAdd) return 'item not found'
    this.basketList.push(itemToAdd)
    return itemToAdd.name
  }
}

const basket = new Basket()
console.log(basket.addItem('BGLO'))