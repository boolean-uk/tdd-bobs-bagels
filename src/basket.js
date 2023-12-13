class Basket {
  constructor(arrayOfItems) {
    this.list = arrayOfItems
  }

  addToBasket(item) {
    if (this.list.find((i) => i.sku === item.sku)) {
      return 'this item is already in your basket!'
    }
    this.list.push(item)
    return this.list
  }
}

class BasketItem {
  constructor(sku, price, name, variant) {
    this.sku = sku
    this.price = price
    this.name = name
    this.variant = variant
  }
}

module.exports = {
  Basket,
  BasketItem
}
