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
   
    increaseCapacity(item, capacity) {
        if (this.items.length >= capacity) {
            capacity ++
            this.items.push(item);
            return 'Capacity has been increase and a new item has been added'
        }
        else {
            this.items.push(item);
            return 'New item has been added'
        }
    }

  
    
    itemNotExisting(itemToBeRemoved) {
        const indexToRemove = this.items.findIndex(item => item === itemToBeRemoved);
    
        if (indexToRemove !== -1) {
            this.items.splice(indexToRemove, 1);
            return "Item has been removed";
        } else {
            return "Item doesn't exist";
        }
    }

    displayPrice(item){
        return item.price
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



