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
    for (let i = 0; i < quantity; i++) {
      this.isBasketFull();
      let newBagel = {
        id: this.basket.length + 1,
        description: description,
      };
      this.basket.push(newBagel);
    }
    return this.basket;
  }

  removeBagel(id) {
    if (this.isIdValid === true) {
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

  isIdValid(id) {
    let validIds = [];
    for (let i = 0; i < this.basket.length; i++) {
      validIds.push(this.basket[i].id);
    }
    if (validIds.includes(id)) {
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
}

module.exports = BobsBagels;
