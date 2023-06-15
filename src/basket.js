require('./../inventory.json')

class BasketList {
  constructor() {
    this.basket = []
  }

  addToBasket(item) {
    this.basket.push(item)
    if (this.basket.includes(item)) {
      return true
    } else {
      return false
    }
  }

  // RemoveFromBasket(itemSku) {
  //   const itemSku = this.basket.filter(
  //   (basketItems) => basketItems.sku !== itemSku.sku
  // )
  // }
}

const basket = new BasketList()
console.log('bagel1', basket)

module.exports = BasketList
