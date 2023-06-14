const data = require('../inventory.json').inventory

class Basket {
  constructor() {
    this.basket = []
  }

  addBagel(SKU) {
    const bagelItem = data.find((item) => item.sku === SKU)
    if (bagelItem) {
      this.basket.push(bagelItem)
    }
    return this.basket
  }

  removeBagel(sku) {
    return this.basket = this.basket.filter((item)=> item.sku !== sku)
  }
}

let newTestBasket = new Basket()

// console.log(newTestBasket);
// console.log(newTestBasket.addBagel('cheese'));
// console.log(newTestBasket.addBagel('ham'));
// console.log(newTestBasket.removeBagel('ham'));

module.exports = Basket
