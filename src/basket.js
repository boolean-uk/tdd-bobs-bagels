const data = require('../inventory.json').inventory

class Basket {
  constructor() {
    this.basket = []
  }

  addBagel(SKU) {
    const bagelItem = data.find((item) => item.sku === SKU)
    if (bagelItem && this.basket.length < 4) {
      this.basket.push(bagelItem)
    } else {
      // console.log('Your basket is full, please use a bigger basket!')
    }
    return this.basket
  }

  removeBagel(sku) {
    return (this.basket = this.basket.filter((item) => item.sku !== sku))
  }

  checkPrice(sku) {
    const getPrice = data.find((item) => item.sku === sku)?.price
    if (!getPrice) {
      return 'the bagel does not exist'
    }
    return `price: ${getPrice}`
  }

  addManyBagels(sku, quantity) {
    if (data.find((item) => item.sku === sku)) {
      for (let i = 0; i < quantity; i++) {
        this.addBagel(sku)
      }
      return true
    } else {
      return false
    }
  }

  getTotal() {
    let total = 0
    for (let i = 0; i < this.basket.length; i++) {
      total += Number(this.basket[i].price)
    }
    return `total: ${total}`
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
    if (this.bigBasket.find((item) => item.sku === sku)) {
      this.bigBasket = this.bigBasket.filter((item) => item.sku !== sku)
      return true
    }
    return false
  }

  checkPrice(sku) {
    const getPrice = data.find((item) => item.sku === sku)?.price
    if (!getPrice) {
      return 'the bagel does not exist'
    }
    return `price: ${getPrice}`
  }

  addManyBagels(sku, quantity) {
    if (data.find((item) => item.sku === sku)) {
      for (let i = 0; i < quantity; i++) {
        this.addBagel(sku)
      }
      return true
    } else {
      return false
    }
  }

  getTotal() {
    let total = 0
    for (let i = 0; i < this.bigBasket.length; i++) {
      total += Number(this.bigBasket[i].price)
    }
    return `total: ${total}`
  }
}

// const newTestBasket = new BigBasket()
//
// console.log(newTestBasket)
// console.log(newTestBasket.addBagel('COF'))
// console.log(newTestBasket.addBagel('COF'))
// console.log(newTestBasket.addBagel('COF'))
// console.log(newTestBasket.addBagel('COF'))
// console.log(newTestBasket.addBagel('COF'))
module.exports = { Basket, BigBasket }
