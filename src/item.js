const skuFromName = (name) => {
  return name.toUpperCase().replace(/[AEIOU]/gi, "").slice(0, 3)
}

class Item {
  constructor (sku, name, price, variant, ...fillings) {
    if (variant) {
      this.sku = skuFromName(name) + variant.toUpperCase()[0]
    } else {
      this.sku = skuFromName(name)
    }
    this.name = name
    this.price = price || 0
    this.variant = variant || ""

    if (fillings.length > 0) {
      this.fillings = [...fillings]
    }
  }
}

export default Item