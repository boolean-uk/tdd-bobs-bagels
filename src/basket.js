class Basket {
  constructor(basketSize) {
    this.bagelBasket = []
    this.basketSize = basketSize || 6
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
    if (this.bagelBasket.length < this.basketSize) {
      this.bagelBasket.push(obj)
      return obj
    } else {
      return 'You have reached your limit'
    }
  }

  getBasket() {
    return this.bagelBasket
  }

  deleteBagel(bagel) {
    let message
    this.bagelBasket.find((obj, index) => {
      if (obj.name === bagel) {
        this.bagelBasket.splice(index, 1)
        message = 'Bagel deleted'
        return true
      } else {
        message = 'Item doesn`t exist in the basket'
        return false
      }
    })
    return message
  }
}
const newBasket = new Basket()
newBasket.createBagel('Bagel1')
newBasket.createBagel('Bagel2')
newBasket.createBagel('Bagel3')
newBasket.createBagel('Bagel4')
newBasket.createBagel('Bagel5')
newBasket.createBagel('Bagel6')
newBasket.createBagel('Bagel7')

console.log(newBasket.basketSize)

module.exports = Basket
