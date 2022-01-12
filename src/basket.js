const data = require("../inventory.json");
const INVENTORY = data["inventory"];
const small = 5;
const medium = 10;
const large = 15;

class Basket {
  constructor(size = small) {
    this.items = [];
    this.size = size;
  }

  add(item) {
    if (this.isFull()) 
       return "You cannot add more items, your basket is full";

    const element = INVENTORY.filter(x => x.sku == item)
    this.items.push(...element)

    if (this.inBasket(item) > 1) 
        return "This item is already in your basket"

    }
      

  remove(item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].sku === item) {
        this.items.splice(i, 1);
        return "Item Removed";
      }
    }
    return "You cannot remove items that are not in your basket";
  }

  isFull() {
    return this.items.length >= this.size;
  }

  changeBasketSize(size) {
    if (size !== small && size !== medium && size !== large) {
      return `Pick small, medium or large`;
    }

    if (this.items.length > size) {
      return `Pick a basket bigger than ${this.items.length}`;
    }

    this.size = size;
  }

  inBasket(item) {
      return this.items.filter(x => x.sku === item).length
  }

  priceOfBagel(item) {
    for (let product of INVENTORY) {
      if (product.sku === item) {
        return product.price;
      }
    }
  }

  priceOfBasket() {
    let total = 0;
    for (let product of this.items) {
      total += Number(product.price);
    }
    return total;
  }
}


module.exports = Basket;
