class Basket {
  constructor () {
    this.bagelBasket = []
  }

  add (bagelName) {
    this.bagelBasket.push(bagelName)

    return this.bagelBasket
  }

  remove (bagelName) {
    this.bagelBasket = this.bagelBasket.filter((item) => {
      return item !== bagelName
    })

    return this.bagelBasket
  }
}

module.exports = Basket
