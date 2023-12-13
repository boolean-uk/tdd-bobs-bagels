const fs = require('fs')

class BagelStore {
  constructor() {
    this.basket = []
    this.inventory = []
  }

  loadFiles() {
    const data = fs.readFileSync('./inventory.json', 'utf-8')
    const inventory = JSON.parse(data).inventory
    this.inventory = inventory
  }

  addToBasket(bagelItemSku) {
    const sku = bagelItemSku.toUpperCase()

    if (typeof bagelItemSku !== 'string' || sku.length !== 4) {
      return 'ERROR: Invalid item'
    }

    const duplicate = this.basket.some((obj) => {
      return obj.sku == sku
    })

    const bagelItem = this.inventory.filter((item) => item.sku === sku)[0]

    if (bagelItem) {
      if (duplicate) {
        this.basket = [...this.basket]
        bagelItem.quantity++
      } else {
        this.basket.push(bagelItem)
        bagelItem.quantity = 1
      }

      return `${bagelItem.variant ? bagelItem.variant : ''} ${
        bagelItem.name
      } (${bagelItem.sku}) added to basket`
    } else {
      return 'Error: Invalid item'
    }
  }

  removeItemFromBasket(bagelItemSku) {
    const sku = bagelItemSku.toUpperCase()

    if (sku.length !== 4 || typeof bagelItemSku !== 'string') {
      return 'ERROR: Invalid Item. Please input a valid sku.'
    }

    const filteredBasket = this.basket.filter((item) => item.sku !== sku)

    this.basket = filteredBasket

    return `${sku} was succesfully removed`
  }
}

module.exports = {
  BagelStore
}
