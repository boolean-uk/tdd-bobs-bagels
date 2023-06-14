class BasketList {
  constructor() {
    this.basket = []
    this.quantity = 1
  }

  addToBasket(){
      const item = {
         quantity: this.quantity++
      }
      this.basket.push(item)
      return this.basket
  }

  RemoveFromBasket(){
      const item = {
          sku: this.sku,
          name: this.name,
          price: this.price,
          varient: this.varient
      }
      
      return this.basket
  }
}
const basket = new BasketList()
console.log("bagel",basket)

module.exports = BasketList