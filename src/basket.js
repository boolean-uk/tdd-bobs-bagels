class Basket{
    constructor(){
        this.items = []
    }

    addItemToBasket(item){
        this.items.push(item)
        return true

    }

   
}


class Item{
    constructor(item){
      this.sku = item.sku
      this.price = item.price
      this.name = item.name
      this.variant = item.variant
    }
}

module.exports = { Basket, Item}