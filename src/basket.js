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
      throw new Error(`Bagel with SKU ${this.sku} not found.`)
    }
  }
}

class Basket {
  constructor(basketSize = 5) {
    this.basketSize = basketSize
    this.bagelsIn = 0
    this.basket = []
  }

  addBagels(sku, qty) {
    
    for (let i = 0; i < qty; i++){
      const bagel = new Bagel(sku, 1)
      this.bagelsIn += 1
      if (this.bagelsIn > this.basketSize) {
        console.log(`Basket is full`)
        throw new Error(`Basket is full`)
      }
      if (bagel) {
        this.basket.push(bagel)
      } else {
        console.log(`No bagel with sku ${sku} `)
        throw new Error(`Bagel with SKU ${sku} not found.`)
      }
    }
    return this.basket
  }
}

export { Bagel }
export default Basket
// console.log(allBagels);
// const test = new Bagel('BGLO', 2)
// console.log('t',test)
