/* eslint-disable no-return-assign */
class Receipt {
  constructor (basket) {
    this.basket = basket
  }

  toString () {
    const header = '   ***Bob\'s Bagels***    '
    const end = '        Thank you        '
    const end2 = '     for your order!     '
    const date = `  ${new Date().toLocaleString()}`
    const sep = '-------------------------'
    const spacer = '\n'
    let items = ''

    this.basket.getItems().forEach(it => items += `${it.variant} ${it.name}   ${it.quantity} £${it.totalPrice().toFixed(2)}\n`)
    const total = `Total           £${this.basket.basketPrice().toFixed(2)}`

    return `${spacer}${header}\n${date}\n${spacer}${sep}\n${spacer}${items}${spacer}${sep}\n${total}\n${spacer}\n${end}\n${end2}${spacer}`
  }
}

module.exports = Receipt
