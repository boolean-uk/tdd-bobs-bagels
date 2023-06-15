import inventory from '../inventory.js'

class Basket {
  constructor() {
    this.items = []
    this.amount = 2
    this.totalBasketQuantity = 0
  }

  getItemFromBasket(whichItem) {
    const item = this.items.find((item) => item.sku === whichItem)
    return item
  }

  addToBasket(whichBagel) {
    console.log(this.totalBasketQuantity)
    if (this.totalBasketQuantity = this.amount) {
      return 'basket is full'
    }

    const item = inventory.find((item) => item.sku === whichBagel)
    if (!item) {
      return
    }
    const existingItem = this.getItemFromBasket(whichBagel)
    if (existingItem) {
      console.log(this.totalBasketQuantity, "before")
      existingItem.quantity++
      this.totalBasketQuantity.quantity++
      console.log(this.totalBasketQuantity, "after")
      return existingItem
    }
    item.quantity = 1
    this.items.push(item)
    console.log(this.totalBasketQuantity, "before")
    this.totalBasketQuantity++
    console.log(this.totalBasketQuantity, "after")
    return item
  }

  removeFromBasket(sku) {
    const removeItem = this.items.find((item) => item.sku === sku)
    if (!removeItem) {
      return
    }
    const existingItem = this.getItemFromBasket(sku)
    if (existingItem) {
      existingItem.quantity--
      this.totalBasketQuantity--
      return existingItem
    }
    this.items.pop()
    this.totalBasketQuantity--
    return removeItem
  }
}
const basket = new Basket()

console.log(basket.addToBasket('BGLO'))
console.log(basket.addToBasket('BGLO'))
console.log(basket.addToBasket('BGLO'))

export default Basket
