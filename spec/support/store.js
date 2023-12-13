class store {
  constructor (name) {
    this.name = name
    this.open = false
    this.availableBasketTypes = []
    this.availableProducts = []
  }

  open () {
    if (this.open) return "We're already open!"
    this.open = true
    return "Store is now open!"
  }

  close () {
    if (!this.open) return "We're already closed!"
    this.open = false
    return "Store is now closed!"
  }
}

export default store