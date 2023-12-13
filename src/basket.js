class Basket {
  constructor() {
    this.list = []
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

const basketItem1 = new BasketItem('BGLO', '0.49', 'Bagel', 'Onion')
const basket = new Basket()

console.log(basket)
basket.addToBasket(basketItem1)
console.log(basket)

module.exports = {
  Basket,
  BasketItem
}
