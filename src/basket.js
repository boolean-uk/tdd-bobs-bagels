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

  // Nathan's remove solution (part 1-2)
  /* 
  remove(id) {
    const newItems = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id != id) {
        newItems.push(this.items[i])
      }
    }
    this.items = newItems;

    return this.items
  }
  */

  // Nathan's solution to part 2 - 3
  /* 
  remove(id) {
    const newItems = [];
    let foundItem = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id != id) {
        newItems.push(this.items[i])
        continue
      }
      fountItem = true
    }
    if (!founItem) {
      return false;
    }
    this.items = newItems;

    return this.items
  }
  */

  fullBasket() {
    if (this.basketList.length >= this.capacity) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Basket;
