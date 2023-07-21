const Inventory = require('./inventory')

class Basket {
  constructor(capacity) {
    if (capacity <= 0) {
      this.capacity = 5
    } else {
      this.capacity = capacity
    }
    this.products = []
    this.summary = []
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

  prepareSummary() {
    this.summary = []
    this.products.forEach((prod) => {
      if (!this.summary[prod.sku]) {
        this.summary[prod.sku] = {
          type: prod.type,
          price: prod.price,
          quantity: 1,
          value: 0
        }
      } else {
        this.summary[prod.sku].quantity++
      }
    })
  }

  getTotal() {
    const inventory = new Inventory().getAvailableItems()

    this.prepareSummary()

    let total = 0
    for (const sku in this.summary) {
      const product = inventory.find((p) => p.sku === sku)
      const { price, quantity } = this.summary[sku]

      if (product && product.specialOffer) {
        const { quantity: offerQuantity, price: offerPrice } =
          product.specialOffer
        const offerSets = Math.floor(quantity / offerQuantity)
        const remainingItems = quantity % offerQuantity
        const itemsValue = offerSets * offerPrice + remainingItems * price
        this.summary[sku].value = itemsValue
        total += itemsValue
      } else {
        const itemsValue = quantity * price
        this.summary[sku].value = itemsValue

        total += itemsValue
      }
    }

    return Math.round(total * 100) / 100
  }

  generateReceipt() {
    this.prepareSummary()

    const header = `\n    ~~~ Bob's Bagels ~~~\n`
    const time = `\n    ${Basket.getCurrentDateTime(new Date())}\n\n`
    const spacer = `----------------------------\n`
    const footer = `\n\n         Thank you\n      for your order!`
    const total = `Total`.padEnd(17) + `£${this.getTotal()}`.padStart(11)
    let content = ``

    for (const sku in this.summary) {
      const { type, quantity, value } = this.summary[sku]

      const name = this.getName(sku, type)
      content += `${name.padEnd(17)}${quantity
        .toString()
        .padStart(3)}   £${value.toFixed(2)}\n`
    }

    return header + time + spacer + content + spacer + total + footer
  }

  getName(sku, type) {
    switch (sku.charAt(0)) {
      case 'B':
        return type + ' Bagel'
      case 'C':
        return 'Coffee'
      default:
        return type
    }
  }

  static getCurrentDateTime(date) {
    if (!(date instanceof Date)) {
      throw new Error("It's not a date")
    }

    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  }
}

module.exports = Basket
