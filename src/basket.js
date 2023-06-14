class Basket {
  constructor() {
    this.bagelBasket = []
  }

  createBagel(bagel) {
    const obj = {
      id:
        this.bagelBasket.length === 0
          ? 1
          : this.bagelBasket[this.bagelBasket.length - 1].id + 1,
      price: 0.49,
      name: bagel
    }

    this.bagelBasket.push(obj)
    return obj
  }

  getBasket() {
    return this.bagelBasket
  }

  deleteBagel(bagel) {
    this.bagelBasket.find((obj, index) => {
      if (obj.name === bagel) {
        this.bagelBasket.splice(index, 1)
        return true
      } else return false
    })
    return this.bagelBasket
  }
}


module.exports = Basket
