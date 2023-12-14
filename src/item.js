const skuFromName = (name, variant) => {
  if (variant) {
    return name.toUpperCase().replace(/[AEIOU]/gi, "").slice(0, 3) + variant.toUpperCase()[0]
  } else {
    return name.toUpperCase().replace(/[AEIOU]/gi, "").slice(0, 3)
  }
}

class Item {
  constructor (name, price, variant, ...fillings) {
    this.sku = skuFromName(name, variant)
    this.name = name
    this.price = price || 0
    this.variant = variant || ""

    if (fillings.length > 0) {
      this.fillings = [...fillings]
    }
  }
}

export { Item, skuFromName }