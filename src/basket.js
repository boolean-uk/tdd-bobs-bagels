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

  removeBagel(sku) {
    const filtered = this.basketItems.filter((bagel) => bagel.item.sku === sku)
    if (filtered.length === 0) {
      return 'Item not found'
    }
    this.basketItems = this.basketItems.filter(
      (bagel) => bagel.item.sku !== sku
    )
    return filtered[0]
  }

  getPriceBySku(sku) {
    const bagels = Inventory.filter((bagel) => bagel.sku === sku)
    if (bagels.length === 0) {
      return 'Bagel not found'
    }
    return bagels[0].price
  }
}

module.exports = Basket
