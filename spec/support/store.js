class Store {
  constructor (name) {
    this.name = name
    this.isOpen = false
    this.availableBasketTypes = []
    this.availableProducts = []
  }
  open () {
    if (this.isOpen) return "We're already open!"
    this.isOpen = true
    return "Store is now open!"
  }

  close () {
    if (!this.isOpen) return "We're already closed!"
    this.open = false
    return "Store is now closed!"
  }
}

export default Store