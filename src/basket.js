class Basket{
    constructor(){
        this.items = []
    }

    addItemToBasket(item){
        this.items.push(item)
        return true

    }

    removeOrder(orderIndex){
        this.items = this.items.filter((item, index) => index !== orderIndex);
        return this.items;
    }
    
    checkBasketCapacity(maximumCapacity){
        return  this.items.length >=  maximumCapacity ? false : true

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



