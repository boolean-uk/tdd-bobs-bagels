class Basket {
  constructor() {
    this.basket = []
  }

  addBagel(bagel) {
    if (bagel !== '') {
      this.basket.push({ type: bagel })
    }
    return this.basket
  }

  removeBagel(bagel) {
    return this.basket = this.basket.filter((item)=> item.type !== bagel)
  }
}

let newTestBasket = new Basket()

console.log(newTestBasket);
console.log(newTestBasket.addBagel('cheese'));
console.log(newTestBasket.addBagel('ham'));
console.log(newTestBasket.removeBagel('ham'));


module.exports = Basket
