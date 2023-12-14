class BagelsStore {
    constructor(sku, price, name, variant) {
       this.sku = sku
       this.price = price
       this.name = name
       this.variant = variant
    }
}

class AddToBasket {
    constructor() {

    }
}


module.exports = {
    BagelsStore,
    AddToBasket,
  };