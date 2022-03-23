class Basket {
  constructor () {
    this.bagelBasket = []
    this.fullCapacity = 3
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

  isFull () {
    if (this.bagelBasket.length > this.fullCapacity) {
      return "Basket is Full"
    } else return "Basket is not full, you can continue to order"
  }
}

module.exports = Basket
