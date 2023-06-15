require('./../inventory.json')

class BasketList {
  constructor(capacity = 3) {
    this.basket = []
    this.maxcapacity = capacity
    
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

  isBasketFull() {
    if (this.basket.length <= this.maxcapacity) {
      return true
    } else {
      return false
    }
  }

  itemCheck(itemSku){
    for(const item of this.basket){
    if(item.sku === itemSku.sku ){
      return true
    }}
    return false;
  }
}

const basket = new BasketList()


module.exports = BasketList
