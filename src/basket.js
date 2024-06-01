import allBagels from '../inventory.json' assert { type: 'json' }

class Bagel {
  constructor(sku, qty = 1) {
    this.sku = sku
    this.qty = qty
    this.loadBagels()
  }

  loadBagels() {
    const bagelData = allBagels.inventory.find(
      (bagel) => bagel.sku === this.sku
    )
    if (bagelData) {
      this.price = parseFloat(bagelData.price)
      this.name = bagelData.name
      this.variant = bagelData.variant
    } else {
      console.log(`Bagel with SKU ${this.sku} not found.`)
      throw new Error(`Bagel with SKU ${this.sku} not found.`)
    }
  }

  showPrice(sku) {
    const bagelToCheck = allBagels.inventory.find((bgl) => bgl.sku === this.sku)
    if (bagelToCheck) {
      console.log(this.price)
      return this.price
    } else {
      const errorMessage = `Bagel with SKU ${sku} not found.`
      console.log(errorMessage)
      throw new Error(errorMessage)
    }
  }
}

// const bagelInstance = new Bagel('BGLr', )
// console.log(bagelInstance.showPrice('BGLO'))

class Basket {
  constructor(basketSize = 5) {
    this.basketSize = basketSize
    this.bagelsIn = 0
    this.basket = []
  }

  addBagels(sku, qty) {
    for (let i = 0; i < qty; i++) {
      const bagel = new Bagel(sku, 1)
      this.bagelsIn += 1
      if (this.bagelsIn > this.basketSize) {
        console.log(`Basket is full`)
        throw new Error(`Basket is full`)
      }
      if (bagel) {
        this.basket.push(bagel)
      } else {
        console.log(`There is no bagel with sku ${sku} `)
        throw new Error(`There is no bagel with sku ${sku}`)
      }
    }
    return this.basket
  }

  removeBagels(sku) {
    const bagelToRemove = this.basket.findIndex((bg) => bg.sku === sku)
    if (bagelToRemove !== -1) {
      this.basket.splice(bagelToRemove, 1)
      return this.basket
    } else {
      console.log(`There is no bagel of this type in the basket`)
      throw new Error(`There is no bagel of this type in the basket`)
    }
  }

  showCost() {
    let total = 0
    for (let i = 0; i < this.basket.length; i++) {
      total += this.basket[i].price
    }
    console.log(total)
    return total
  }
}

export { Bagel }
export default Basket
// console.log(allBagels);
// const test = new Bagel('BGLO', 2)
// console.log('t',test)
