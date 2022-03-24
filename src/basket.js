class Basket {
  basketList = [];

  constructor(capacity = 2) {
    this.capacity = capacity;
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
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Basket;
