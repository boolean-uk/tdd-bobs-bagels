class Register {
  constructor (atStore) {
    this.atStore = atStore
    this.till = 0
    this.currentCustomer = null
  }

  changeTotill (amount) {
    const tillBefore = this.till.toFixed(2)
    this.till = this.till + amount
    console.log(`register change: £${tillBefore} + £${amount} -> £${this.till}`)
  }

  takeCustomer (customer) {
    this.currentCustomer = customer
  }

  billCustomer () {
    this.receipt()
    this.changeTotill(this.currentCustomer.basket.checkTotal())
    this.currentCustomer = null
  }

  receipt () {
    const basket = this.currentCustomer.basket

    const printItem = (item) => `${item.name} ${item.variant || "" }\n${item.quantity}pcs – £${item.price} – £${item.price * item.quantity}`
    const itemLineArr = basket.items.map(item => printItem(item))

    const header = `~~~ ${this.atStore.name} ~~~\n\n`
    + `${new Date().toLocaleString()}\n----------------------------\n`

    const footer = `\n----------------------------\n`+
    `Total                 £${basket.checkTotal()}\n\n`+
    `Thank you for your order!`

    console.log(header + "\n" + itemLineArr.join("\n\n") + "\n" + footer)
  }
}

export default Register