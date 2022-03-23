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