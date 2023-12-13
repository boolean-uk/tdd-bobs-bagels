class Customer {
  constructor () {
    this.id = new Date().getTime()
    this.basket = null
  }

  lookAtBasketType () {
    console.log(this, "basket")
  }
  
  takeBasket (typeName) {
    console.log(this)
  }
}

export default Customer