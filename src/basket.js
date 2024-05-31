import allBagels from '../inventory.json' assert { type: 'json' }

// class Basket {
//   constructor() {}
// }

class Bagel {
  constructor(sku, qty = 1) {
    this.sku = sku
    this.qty = qty
    const bagelData = allBagels.inventory.find((bgl) => bgl.sku === sku)
  }
}

export { Bagel }
