const Inventory = require('./inventory')
class Basket {
  constructor(capacity) {
    if (capacity <= 0) {
      this.capacity = 5
    } else {
      this.capacity = capacity
    }
    this.products = []
  }

  addProduct(bagel) {
    if (this.products.length === this.capacity)
      throw new Error('Capacity exceeded')
    this.products.push(bagel)
  }

  addProducts(bagel, num) {
    for (let i = 0; i < num; i++) this.addProduct(bagel)
  }

  removeBagel(bagel) {
    if (this.products.findIndex((item) => item === bagel) === -1) {
      throw new Error('Item is not in basket')
    }
    this.products = this.products.filter((prod) => prod !== bagel)
  }

  changeCapacity(newCapacity) {
    if (newCapacity < this.products.length)
      throw new Error('You capacity cannot be smaller than products amount')
    if (newCapacity <= 0)
      throw new Error('Your capacity cannot be smaller or equal 0')
    this.capacity = newCapacity
  }

  getTotal() {
    const inventory = new Inventory().getAvailableItems()

    const summary = {}
    this.products.forEach((prod) => {
      if (!summary[prod.sku]) {
        summary[prod.sku] = {
          price: prod.price,
          quantity: 1
        }
      } else {
        summary[prod.sku].quantity++
      }
    })

    let total = 0
    for (const sku in summary) {
      const product = inventory.find((p) => p.sku === sku)
      const { price, quantity } = summary[sku]

      if (product && product.specialOffer) {
        const { quantity: offerQuantity, price: offerPrice } =
          product.specialOffer
        const offerSets = Math.floor(quantity / offerQuantity)
        const remainingItems = quantity % offerQuantity
        total += offerSets * offerPrice + remainingItems * price
      } else {
        total += quantity * price
      }
    }

    return Math.round(total * 100) / 100
  }
}

module.exports = Basket
