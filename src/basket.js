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
    return obj
  }

  getBasket() {
    return this.bagelBasket
  }

  deleteBagel(bagel) {
    const newArr = this.bagelBasket.filter((object) => {
      return object.bagel === bagel
    })
    console.log(newArr)

    this.bagelBasket.splice(this.bagelBasket.indexOf(newArr[0]), 1)

    return this.bagelBasket
  }
}

module.exports = Basket
