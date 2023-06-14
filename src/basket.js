class Basket {
  constructor() {
    this.bagelBasket = []
  }

  createBagel(bagel) {
    const obj = {
      id: this.bagelBasket.length + 1,
      price: 0.49,
      name: bagel
    }

    this.bagelBasket.push(obj)
    return this.bagelBasket
  }

  
}

module.exports = Basket
