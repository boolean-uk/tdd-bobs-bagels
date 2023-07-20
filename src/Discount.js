class Discount {
  constructor(product, quantity, promoPrice) {
    this.product = product
    this.requiredQuantity = quantity
    this.discount = product.price * quantity - promoPrice
  }
}

module.exports = Discount
