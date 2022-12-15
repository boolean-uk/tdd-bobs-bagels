const { inventory } = require('../inventory.json')
const { specialOffers } = require('../specialOffers')

class Basket {
  constructor(basketCapacity = 10) {
    this.basketCapacity = basketCapacity
    this.basket = []
  }

  addBagel(sku) {
    const found = inventory.find((bagel) => bagel.sku === sku)

    if (!found) return

    const exists = this.basket.find((bagel) => bagel.sku === found.sku)

    if (exists) ++exists.quantity
    else {
      if (this.basket.length === this.basketCapacity) return false
      const foundCopy = { ...found, quantity: 1 }
      this.basket.push(foundCopy)
      return foundCopy
    }
  }

  removeBagel(sku) {
    const found = this.basket.find((bagel) => bagel.sku === sku)

    if (!found) return false

    this.basket = this.basket.filter((bagel) => bagel.sku !== found.sku)

    return found
  }

  displayPrices() {
    return inventory.map((bagel) => {
      const { sku, price, variant } = bagel
      return { sku, price, variant }
    })
  }

  displayTotal() {
    // const offerData = this.applyOffers()
    // console.log(offerData)

    const total = this.basket.reduce((total, bagel) => {
      return total + +bagel.price * bagel.quantity
    }, 0)

    return `${total.toFixed(2)}`
  }

  applyOffers() {
    let offersTotal = 0

    specialOffers.forEach((offer) => {
      this.basket.forEach((bagel) => {
        if (bagel.sku === offer.sku && bagel.quantity >= offer.amountNeeded) {
          console.log('there are eligible offers')
          const remainingAfterOffer = bagel.quantity % offer.amountNeeded
          const offerAmount = bagel.quantity - remainingAfterOffer

          // work out offer totals
          offersTotal += offer.priceOffer * (offerAmount / offer.amountNeeded)
        }
      })
    })
    return offersTotal.toFixed(2)
  }
}

const newBasket = new Basket(12)
newBasket.addBagel('BGLO')
newBasket.addBagel('BGLO')
newBasket.addBagel('BGLO')
newBasket.addBagel('BGLO')
newBasket.addBagel('BGLO')
newBasket.addBagel('BGLO')
newBasket.addBagel('BGLO')
newBasket.addBagel('BGLO')
newBasket.addBagel('BGLO')
newBasket.addBagel('BGLO')
newBasket.addBagel('BGLO')
newBasket.addBagel('BGLO')
newBasket.addBagel('BGLO')
newBasket.addBagel('BGLO')

newBasket.addBagel('BGLP')
newBasket.addBagel('BGLP')
newBasket.addBagel('BGLP')
newBasket.addBagel('BGLP')
newBasket.addBagel('BGLP')
newBasket.addBagel('BGLP')
newBasket.addBagel('BGLP')
newBasket.addBagel('BGLP')
newBasket.addBagel('BGLP')
newBasket.addBagel('BGLP')
newBasket.addBagel('BGLP')
newBasket.addBagel('BGLP')

// console.log(newBasket.displayTotal())
const data = newBasket.applyOffers()
console.log('returning from applyOffers:', data)

module.exports = { Basket }
