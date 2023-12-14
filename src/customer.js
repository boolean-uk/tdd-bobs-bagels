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

  askForItem (name, variant) {
    return this.atStore.getProductByDescription(name, variant)
  }
}

export default Customer