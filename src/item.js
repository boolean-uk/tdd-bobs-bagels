class Item {
  constructor (sku, name, price, variant, ...fillings) {
    this.sku = sku
    this.name = name
    this.price = price || 0
    this.variant = variant || ""

    if (fillings.length > 0) {
      this.fillings = [...fillings]
    }
  }
}

export default Item