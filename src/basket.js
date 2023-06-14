const data = require('../inventory.json').inventory

class Basket {
  constructor() {
    this.basket = []
  }

  addBagel(SKU) {
    const bagelItem = data.find((item) => item.sku === SKU)
    if (bagelItem && this.basket.length < 4) {
      this.basket.push(bagelItem)
    }
    else{
      console.log("Your basket is full, please use a bigger basket!");
    }
    return this.basket
  }

  removeBagel(sku) {
    return this.basket = this.basket.filter((item)=> item.sku !== sku)
  }
}

class BigBasket {
  constructor() {
    this.bigBasket = []
  }
  addBagel(SKU) {
    const bagelItem = data.find((item) => item.sku === SKU)
    if (bagelItem) {
      this.bigBasket.push(bagelItem)
    }

    return this.bigBasket
  }

  removeBagel(sku) {
    return this.bigBasket = this.bigBasket.filter((item)=> item.sku !== sku)
  }
}



let newTestBasket = new BigBasket()

console.log(newTestBasket);
console.log(newTestBasket.addBagel('COF'));
console.log(newTestBasket.addBagel('COF'));
console.log(newTestBasket.addBagel('COF'));
console.log(newTestBasket.addBagel('COF'));
console.log(newTestBasket.addBagel('COF'));



module.exports = Basket, BigBasket
