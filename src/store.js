import { inventory } from "./inventory.js"

class Store {
  constructor (name) {
    this.name = name
    this.isOpen = false
    this.availableBasketTypes = []
    this.availableProducts = [...inventory]
  }
  open () {
    if (this.isOpen) return "We're already open!"
    this.isOpen = true
    return "Store is now open!"
  }

  close () {
    if (!this.isOpen) return "We're already closed!"
    this.isOpen = false
    return "Store is now closed!"
  }

  handoutBasket (name) {
    if (this.availableBasketTypes.length === 0) return "no basket types"
    if (!!name) return false
    const foundBasket = this.availableBasketTypes.find(basket => basket.name === name)
    if (!!foundBasket) return "invalid name" 
    return foundBasket
  }
}

export default Store