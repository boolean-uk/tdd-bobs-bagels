import inventory from '../inventory.js'

class Basket {
  constructor() {
    this._list = []
    this._inventory = inventory
  }

  get list() {
    return this._list
  }

  get inventory() {
    return this._inventory
  }

  add(sku) {
    if (
      typeof sku !== 'string' ||
      (typeof sku === 'string' && sku.length === 0)
    ) {
      return 'item sku required'
    }

    const item = this.findInventoryItem(sku)

    if (item !== 'item not found') {
      this.list.push(item)
      return 'item added'
    }

    return 'item sku not found'
  }

  remove(sku) {
    const indexToRemove = this._list.findIndex((item) => item.sku === sku)

    if (indexToRemove === -1) {
      const stockedItem = this.findInventoryItem(sku)

      if (stockedItem === 'item not found') return 'item is not stocked'
      return 'item not found'
    }

    this._list.splice(indexToRemove, 1)

    return 'item removed'
  }

  findInventoryItem(sku) {
    const foundItem = this.findSku(this.inventory, sku)

    if (typeof foundItem === 'object') return foundItem
    return 'item not found'
  }

  findBasketItem(sku) {
    const foundItem = this.findSku(this.list, sku)

    if (typeof foundItem === 'object') return foundItem

    const stockedItem = this.findInventoryItem(sku)

    if (stockedItem === 'item not found') return 'item is not stocked'
    return 'item not found'
  }

  findSku(array, sku) {
    return array.find((item) => item.sku === sku)
  }
}

export default Basket
