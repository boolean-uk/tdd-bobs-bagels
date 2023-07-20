class Basket {
  constructor(capacity) {
    this.capacity = capacity
    this.bagels = []
  }

  isFull() {
    return this.bagels.length === this.capacity
  }

  add(bagel) {
    if(!this.isFull())
    this.bagels.push(bagel)
  }

  doesBagelExist(bagel) {
    if(this.bagels.includes(bagel)) return true
    return false
  }

  remove(bagel) {
    if(this.doesBagelExist(bagel)) this.bagels.splice(bagel, 1)
  }

  totalCost() {
  let cost = 0
  for (const bagel of this.bagels) {
    cost += bagel.price
  }
  return cost
}


}
module.exports = Basket