class Item {
  constructor() {

  }
}

class BobsBagels {
  constructor() {
    this.basket = [];
    this.basketCapacity = 3;
    this.menu = [
      { sku: "BGLP", type: "Bagel", description: "Plain", price: 1.00 },
      { sku: "BGLN", type: "Bagel", description: "Not So Plain", price: 1.50 },
      { sku: "BGLV", type: "Bagel", description: "Very Tasty", price: 2.00 },
      { sku: "BGLE", type: "Bagel", description: "Bagel Extra", price: 2.50 },
      { sku: "BGLS", type: "Bagel", description: "Bagel Special", price: 3.00 },
      { sku: "COFL", type: "Coffee", description: "Latte", price: 2.75 },
    ];
  }

  addBagel(description, quantity) {
    let newBagel;
    for (let i = 0; i < this.menu.length; i++) {
      if (
        this.menu[i].description === description ||
        this.menu[i].sku === description
      ) {
        newBagel = this.menu[i];
      }
    }
    for (let i = 0; i < quantity; i++) {
      this.isBasketFull();
      this.basket.push(newBagel);
    }
    return this.basket;
  }

  removeBagel(id) {
    if (this.isItemValid === true) {
      this.basket = this.basket.filter((bagel) => bagel.id !== id);
      return this.basket;
    } else {
      return this.basket;
    }
  }

  isBasketFull() {
    if (this.basket.length >= this.basketCapacity) {
      return "YOUR BASKET IS FULL";
    }
  }

  amendBasketCapacity(newCapacity) {
    this.basketCapacity = newCapacity;
    return this.basketCapacity;
  }

  isItemValid(item) {
    let validItems = [];
    for (let i = 0; i < this.basket.length; i++) {
      if (this.basket[i].description === item) {
        validItems.push(this.basket[i].description);
      }
    }
    if (validItems.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  price(description) {
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].description === description) {
        return this.menu[i].price;
      }
    }
  }

  totalSum() {
    return this.basket.length;
  }

  orderSum() {
    console.log(this.basket)
    let sum = 0
    for (let i = 0; i < this.basket.length; i++) {
      sum += this.basket[i].price
    }
    return sum
  }

  printReceipt() {
    //find out how many of each???
    




    console.log("     ~~~ Bob's Bagels ~~~     ")
    console.log()
    console.log("      202-03-23 18:38:44      ")
    console.log()
    console.log("------------------------------")
    console.log()
    console.log(this.basket[0].description + " " + this.basket[0].type)
    console.log("                   " + "£ " + this.basket[0].price)
    console.log(this.basket[2].description + " " + this.basket[2].type)
    console.log("                   " + "£ " + this.basket[2].price)
    console.log(this.basket[3].description + " " + this.basket[3].type)
    console.log("                   " + "£ " + this.basket[3].price)
  

  }


}

module.exports = BobsBagels;
