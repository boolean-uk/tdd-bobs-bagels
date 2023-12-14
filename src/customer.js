class Customer {
  constructor () {
    this.id = new Date().getTime()
    this.basket = null
  }

  receiveBasket (basketObj) {
    this.basket = basketObj
  }
}

export default Customer