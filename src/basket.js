const { inventory } = require('../inventory.json')

class Basket {
  constructor(basketCapacity = 10) {
    this.basketCapacity = basketCapacity
    this.basket = []
  }
}

// const newBasket = new Basket(12)
// console.log(newBasket)

module.exports = { Basket }
