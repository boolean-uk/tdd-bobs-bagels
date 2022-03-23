class BobsBagels {
  constructor() {
    this.basket = [];
    this.basketCapacity = 3;
    this.menu = [
      {
        description: "Plain",
        price: 1,
      },
      {
        description: "Not So Plain",
        price: 1.5,
      },
      {
        description: "Very Tasty",
        price: 2,
      },
      {
        description: "Bagel Extra",
        price: 2.5,
      },
      {
        description: "Bagel Special",
        price: 3,
      },
    ];
  }

  addBagel(description, quantity) {
    let newBagel;
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].description === description) {
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

  calcTotalSum() {
    console.log(this.basket);
    let basketSum = 0;
    //loop basket
    for (let i = 0; i < this.basket.length; i++) {
      //find prices
      basketSum += this.basket[i].price;
    }
    return basketSum;
    //add prices together
  }
}

module.exports = BobsBagels;
