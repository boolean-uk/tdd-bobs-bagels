require('./../inventory.json')

class BasketList {
  constructor() {
    this.basket = []
    this.maxcapacity = 3
  }

  addToBasket(item) {
    this.basket.push(item)
    if (this.basket.includes(item)) {
      return true
    } else {
      return false
    }
  }

  RemoveFromBasket(itemSku) {
    const filteredBasket = this.basket.filter(
      (basketItems) => basketItems.sku !== itemSku.sku
    )
    this.basket = filteredBasket
    filteredBasket.forEach((basketItems) => {
      if (basketItems.sku === itemSku.sku) {
        return false
      }
    })
    return true
  }

  isBasketFull(item) {
    if (this.basket.length <= this.maxcapacity) {
      return true
    } else {
      return false
    }
  }
}

const basket = new BasketList()
console.log('bagel1', basket)
console.log('..', this.basket)

module.exports = BasketList
