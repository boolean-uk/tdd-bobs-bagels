const Bagel = require("../src/bagel.js");

class Basket {
  constructor(number = 3) {
    this.contents = [];
    this.IDcounter = 0;
    this.capacity = number;
  }

  getPriceOfBagel() {
    const output = new Bagel();
    return output.price;
  }

  addBagel(bagelType, numOfBagels = 1) {
    for (let i = 0; i < numOfBagels; i++) {
      if (!this.basketIsFull()) {
        this.IDcounter++;
        const id = this.IDcounter;
        let bagelItem = new Bagel(id, bagelType);
        this.contents.push(bagelItem);
      }
    }
    return this.contents;
  }

  removeBagel(id) {
    for (let i = 0; i < this.contents.length; i++) {
      if (this.contents[i].id === id) {
        this.contents.splice([i], 1);
        return this.contents;
      }
    }
    return "Bagel isn't in basket";
  }

  basketIsFull() {
    console.log("capacity" + this.capacity);
    if (this.contents.length >= this.capacity) {
      return "basket is full";
    }
    return false;
  }

  getTotal() {
    let total = 0;
    for (let i = 0; i < this.contents.length; i++) {
      total += this.contents[i].price;
    }
    return total;
  }
}

module.exports = Basket;

module.exports = Basket;
