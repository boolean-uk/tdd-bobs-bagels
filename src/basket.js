const { validateBagel } = require('./bagel')

class Basket {
  constructor(capacity = 10) {
    if (capacity <= 0) throw new Error('Capacity must be a positive number')
    this.capacity = capacity
    this.bagels = new Map()
  }

  addBagel(bagel, amount = 1) {
    validateBagel(bagel)
    if (this.bagelAmount() + amount > this.capacity) {
      throw new Error('Cannot add bagel - basket is full')
    }
    const currentAmount = this.bagels.get(bagel)
    if (currentAmount === undefined) {
      this.bagels.set(bagel, amount)
    } else {
      this.bagels.set(bagel, currentAmount + amount)
    }
  }

  removeBagel(bagel, amount = 1) {
    validateBagel(bagel)
    const currentAmount = this.bagels.get(bagel)
    if (currentAmount === undefined) {
      throw new Error(`Cannot remove ${bagel} - it's not in the basket`)
    } else if (currentAmount < amount) {
      throw new Error(
        `Cannot remove ${amount} bagels - there are ${currentAmount} in the basket`
      )
    }
    this.bagels.set(bagel, currentAmount - amount)
  }

  bagelAmount() {
    return [...this.bagels.values()].reduce((a1, a2) => a1 + a2, 0)
  }

  totalCost() {
    return [...this.bagels.entries()]
      .map(([bagel, amount]) => {
        return bagel.price * amount
      })
      .reduce((p1, p2) => p1 + p2, 0)
  }
}

module.exports = { Basket }
