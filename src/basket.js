const Inventory = require('../inventory.json').inventory
const Item = require('./item.js')

class Basket {
  constructor() {
    this.basketItems = []
    this.basketSize = 3
    this.itemID = 1
  }

  addBagel(sku) {
    const basketContents = this.basketItems
      .map((basketItem, i) => [basketItem, i])
      .filter(([basketItem]) => basketItem.item.sku === sku)

    if (this.basketItems.length === this.basketSize) {
      return 'Your basket is full'
    }

    if (basketContents.length > 0) {
      const [basketItem, i] = basketContents[0]
      basketItem.quantity++
      this.basketItems[i] = basketItem
      return basketItem
    }

    const bagelToAdd = Inventory.filter((bagel) => bagel.sku === sku)
    const item = new Item(this.itemID, 1, bagelToAdd[0])
    this.basketItems.push(item)
    this.itemID++
    return item
  }

  getItemsInBasket() {
    return this.basketItems
  }
}

module.exports = Basket
