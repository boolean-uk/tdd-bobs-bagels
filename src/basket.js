class Basket {
  constructor() {
    this.basketList = [];
    this.capacity = 4;
  }

  addToBasket(bagel) {
    this.basketList.push(bagel);
    return this.basketList;
  }

  removeFromBasket(bagelName) {
    for (let i = 0; i < this.basketList.length; i++) {
      // console.log(i, bagelName, this.basketList[i].name);
      if (this.basketList[i].name === bagelName) {
        this.basketList.splice(i, 1);
        // console.log(this.basketList);
        break;
      }
    }
    return this.basketList;
  }

  fullBasket() {
    if (this.basketList.length >= this.capacity) {
      return "Your basket is full";
    } else {
      return "You can buy more bagels";
    }
  }

  createBaskets() {
    const basketsHigherCapacity = {
      basketOne: "Capacity 5",
      basketTwo: "Capacity 8",
      basketThree: "Capacity 10",
    };
    this.basketList.push(basketsHigherCapacity);
    console.log(basketsHigherCapacity);
    return basketsHigherCapacity;
  }
}

module.exports = Basket;
