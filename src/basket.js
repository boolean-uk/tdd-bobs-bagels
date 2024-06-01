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
    this.bagelsIn = []
  }

  addBagels(sku, qty) {
    const bagel = new Bagel(sku, qty)
    if (bagel) {
      this.bagelsIn.push(bagel)
      return this.bagelsIn      
    } else {
      console.log(`No bagel with sku ${sku} `)
      throw new Error(`Bagel with SKU ${sku} not found.`)
      return false
    }

  }

}


export { Bagel }
export default Basket
// console.log(allBagels);
// const test = new Bagel('BGLO', 2)
// console.log('t',test)
