class Item {
  constructor (sku, name, price = 1) {
    this.sku = sku
    this.name = name
    this.price = price
  }
}

module.exports = Item
