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
    let bgloCount = 0
    let bglpCount = 0
    let bgleCount = 0
    let cofCount = 0

    for (let i = 0; i < this.bigBasket.length; i++) {
      if (this.bigBasket[i].sku === 'BGLO') {
        bgloCount += 1
      }
      if(this.bigBasket[i].sku === 'BGLP') {
        bglpCount +=1
      }
      if(this.bigBasket[i].sku === 'BGLE') {
        bgleCount +=1
      }
      if(this.bigBasket[i].sku === 'COF') {
        cofCount +=1
      }
      total += Number(this.bigBasket[i].price)
      while (bgloCount >= 6) {
        total -= 0.45
        bgloCount -= 6
      }
      while (bglpCount >= 12) {
        total -= 0.69
        bglpCount -=12
      }
      while(bgleCount >= 6) {
        total -= 0.45
        bgleCount -= 6
      }
      while(bglpCount >= 1 && cofCount >= 1) {
        total -= 0.13
        bglpCount -= 1
        cofCount -= 1
      }
    }
    return `total: ${total.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]}`
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
