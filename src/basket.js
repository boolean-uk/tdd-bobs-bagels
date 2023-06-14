require('./../inventory.json')

class BasketList {
  constructor() {
    this.basket = []
  }

  addToBasket(item) {
    this.basket.push(item)
    if (this.basket.includes(item)) {
      return true
    } else {
      return false
    }
  }

  // RemoveFromBasket() {
  //   const item = {
  //     quantity: this.quantity--
  //   }
  //    this.basket.shift(item)
  //   return this.basket
}
const basket = new BasketList()
console.log('bagel1', basket)

module.exports = BasketList
