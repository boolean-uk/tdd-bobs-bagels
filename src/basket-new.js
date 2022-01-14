const Receipt2 = require("./receipt-new.js")
const data = require("../inventory-quant.json");
const inventory = data.inventory;
const small = 5;
const medium = 10;
const large = 15;

class Basket2 {
  constructor(size = small) {
    this.items = [];
    this.size = size;
  }

  add(item, num = 1) {
    if (this.isFull()) 
       return "You cannot add more items, your basket is full";

    for(let i = 0; i < this.items.length; i++) {
        if(this.items[i].sku === item) {
            this.items[i].quantity+= num
            return "This item is already in your basket"
        }
    }

    const element = inventory.filter(x => x.sku == item) 
        if(element.length === 1) {
        this.items.push(element[0])
        }
    
    for(let i = 0; i < this.items.length; i++) {
        if(this.items[i].sku === item) {
                this.items[i].quantity = num
            }
        }


      if(element.length === 0) {
        return "We do not stock this item"
      }
}

      

  remove(item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].sku === item && this.items[i].quantity === 1) {
             this.items.splice(i, 1);
                return "Item Removed";
          }

      if(this.items[i].sku === item && this.items[i].quantity > 1) {
            this.items[i].quantity-- 
            return "Item Removed";
          }
      }
    return "You cannot remove items that are not in your basket";
  }

  totalItemsInBasket() {
    let amount = 0

    for(let i = 0; i < this.items.length; i++) {
        amount += this.items[i].quantity
    }

  return amount
  }

  isFull() {
    return this.totalItemsInBasket() >= this.size;
  }

  changeBasketSize(size) {
    if (size !== small && size !== medium && size !== large) {
      return `Pick small, medium or large`;
    }

    if (this.totalItemsInBasket() > size) {
      return `Pick a basket bigger than ${this.totalItemsInBasket()}`;
    }

    this.size = size;
  }

  howManyOfItem(item) {
    for(let i = 0; i < this.items.length; i++) {
        if(this.items[i].sku === item) {
        return this.items[i].quantity
    }
}
  return 0
}

  priceOfBagel(item) {
    for (let product of inventory) {
      if (product.sku === item) {
        return product.price;
      }
    }
  }

  priceOfBasket() {
    let total = 0;
    let changeArray = this.items.map(x => x)

    total += this.applySpecialOffer(changeArray, "BGLO", 6, 2.49)
    total += this.applySpecialOffer(changeArray, "BGLP", 12, 3.99)
    total += this.applySpecialOffer(changeArray, "BGLE", 6, 2.49)
    total += this.applyCoffeeBagelOffer(changeArray)

    for (let product of changeArray) {
        total += Number(product.price)*product.quantity
      }

//     if (this.howManyOfItem('BGLO')/6 >= 1) {
//         total -= 0.45*Math.floor(this.howManyOfItem('BGLO')/6)
//     } 
//     if (this.howManyOfItem('BGLE')/6 >= 1) {
//       total -= 0.45*Math.floor(this.howManyOfItem('BGLE')/6)
//   } 
//     if (this.howManyOfItem('BGLP')/12 >= 1) {
//         total -= 0.69*Math.floor(this.howManyOfItem('BGLP')/12)
//     } 

return Math.floor(total * 100) / 100;
    // return Math.ceil(total * 100) / 100;
  }

  applySpecialOffer(array, item, numberOfItem, dealPrice) {
    
    const howManyInBasket = this.howManyOfItem(item)
    const amountOfDeals = Math.floor(howManyInBasket/numberOfItem) 

   if (amountOfDeals >= 1) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].sku === item) {
          array[i].quantity -= (numberOfItem*amountOfDeals)
        }}}
        
    return amountOfDeals*dealPrice
}

applyCoffeeBagelOffer(array) {
let counter = 0

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i].sku === "COF" && array[j].sku === "BGLP") {
          let least = Math.min(array[i].quantity, array[j].quantity)
        array[i].quantity -= least
        array[j].quantity -= least
        counter+=least
      }
    }
  }     

return counter*1.25
}



}



module.exports = Basket2