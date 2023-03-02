require('./../inventory.json')

class Basket {
  constructor(basket = []) {
    this.basket = basket
  }

  addToBasket(bagel) {
    this.basket.push(bagel)
    if (this.basket.includes(bagel)) {
      return true
    } else {
      return false
    }
  }

  removeFromBasket(sku) {
    const filteredList = this.basket.filter(
      (bagelItem) => bagelItem.sku !== sku
    )
    this.basket = filteredList
    let isTrue = true
    this.basket.forEach((bagelItem) => {
      if (bagelItem.sku === sku) {
        isTrue = false
      }
    })
    return isTrue
  }
}

module.exports = Basket
