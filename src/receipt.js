class Receipt {
  constructor(data) {
    this.data = data
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
      return string
    })
    string += String(basketList).replace(',', '')
    return string
  }

  print() {
    console.log(`
        ~~~ 🥯 Bob's Bagels ~~~
         ${this.data.date}
      ----------------------------`)
    console.log(this.receiptItemsConstructor())

    console.log(
      `      ----------------------------
      Total                 £10.43

      Thank you
      for your order!
      ############################
    `
    )
  }
}

module.exports = {
  Receipt
}
