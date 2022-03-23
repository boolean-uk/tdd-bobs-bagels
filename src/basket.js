class Basket {
  constructor () {
    this.bagelBasket = []
  }

  add (bagelName) {
    this.bagelBasket.push(bagelName)
    console.log(this.bagelBasket)
    return this.bagelBasket
  }

  remove (bagelName) {
    this.bagelBasket = this.bagelBasket.filter((item) => {
      return item !== bagelName
    })
    console.log(this.bagelBasket)
    return this.bagelBasket
  }
}

module.exports = Basket
