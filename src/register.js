class Register {
  constructor (atStore) {
    this.atStore = atStore
    this.drawer = 0
    this.currentCustomer = null
  }

  changeToDrawer (amount) {
    const drawerBefore = this.drawer.toFixed(2)
    this.drawer = this.drawer + amount
    console.log(`register change: £${drawerBefore} + £${amount} -> £${this.drawer}`)
  }

  takeCustomer (customer) {
    this.currentCustomer = customer
  }

  billCustomer () {
    this.receipt()
    this.changeToDrawer(this.currentCustomer.basket.checkTotal())
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