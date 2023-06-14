import inventory from '../inventory.js'

class Item {
  constructor(sku, price, name, variant) {
    this.sku = sku
    this.price = price
    this.name = name
    this.variant = variant
  }
}

console.log(inventory)

class Basket {
  constructor(item) {
    this.item = item
  }

}

export { Item, Basket }
