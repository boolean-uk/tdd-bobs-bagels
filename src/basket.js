import allBagels from '../inventory.json' assert { type: 'json' }

// class Basket {
//   constructor() {}
// }

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
    console.log(bagelData);
  }

}

export { Bagel }
// console.log(allBagels);
// const test = new Bagel('BGLO', 2)
// console.log('t',test)