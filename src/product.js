class Product {
  constructor(sku, price, name, variant) {
    this.sku = sku
    this.price = price
    this.name = name
    this.variant = variant
  }

  getPrice() {
    return this.price
  }
}

module.exports = Product
