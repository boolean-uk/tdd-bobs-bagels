class Customer {
  constructor (StoreObj) {
    this.id = new Date().getTime()
    this.basket = null
    this.atStore = StoreObj
  }

  enterStore (storeObj) {
    this.atStore = storeObj
  }

  receiveBasket (basketObj) {
    this.basket = basketObj
  }
}

export default Customer