class Receipt {
  constructor(data) {
    this.data = data
    this.withOffer = false
    this.discountTotal = 0
  }

  info() {
    return this.data
  }

  receiptItemsConstructor() {
    let string = '\n      ' // Initial left space
    const basketList = this.data.basket.map((item) => {
      let string = ''
      let nameSpaces = 19
      let quantitySpaces = 4

      // Names
      string += item.variant ? item.variant + ' ' : ''
      string += item.name
      nameSpaces -= string.length // Remove spaces ocupied
      string += ' '.repeat(nameSpaces) // Add names space

      // Quantity
      string += item.quantity
      quantitySpaces -= String(item.quantity).length
      string += ' '.repeat(quantitySpaces) // Add quantity space

      // Price
      string += `£${item.stackPrice}`
      string += '\n      ' // Next line and Left space

      // 21 left spaces then (-$0.00)
      const normalStackPrice = item.quantity * item.price
      if (normalStackPrice !== item.stackPrice) {
        this.withOffer = true
        string += ' '.repeat(21)
        string += `(-£${(normalStackPrice - item.stackPrice).toFixed(2)})`
        this.discountTotal += normalStackPrice - item.stackPrice
      }
      return string
    })
    string += String(basketList).replace(',', '')
    return string
  }

  print() {
    console.log(`
        ~~~ 🥯 Bob's Bagels ~~~
         ${this.data.date}
      ----------------------------
      ${this.receiptItemsConstructor()}
      ----------------------------
      Total                  £${this.data.total}

      Total saved: £${this.discountTotal.toFixed(2)}
      Thank you for your order!
      ############################
    `)
  }
}

module.exports = {
  Receipt
}
