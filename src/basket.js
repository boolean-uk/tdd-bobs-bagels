const Manager = require("../src/manager");
// const Costumer = require("../src/costumer");
// var readlineSync = require("readline-sync");

class Basket {
  itemsArr = [];
  currentId = 1;
  limit = 5;
  manager = new Manager();

  addItemToBasket(name) {
    const item = {
      name,
      id: this.currentId,
      price: name.length * 10,
    };
    this.currentId++;
    this.checkForPriceBeforeAddToCart(item);
    this.itemsArr.push(item);

    return this.isBasketFull() ? "Your basket is full!" : this.itemsArr;
  }

  isBasketFull() {
    return this.itemsArr.length > this.limit;
  }

  removeItemFromBasket(id) {
    const itemsBeforeRemove = this.itemsArr;
    this.itemsArr = this.itemsArr.filter((item) => item.id !== id);

    return itemsBeforeRemove.length === this.itemsArr.length
      ? "Item doesn't exist"
      : this.itemsArr;
  }

  changeBasketLimit(newLimit) {
    return (this.limit = this.manager.changeBasketLimit(newLimit));
  }

  checkForPriceBeforeAddToCart(item) {
    const price = `The price of your ${item} is ${item.length * 10} pence`;
    return price;
  }

  addMultipleFavoriteToCart(name, times) {
    if (times > this.limit - this.itemsArr.length)
      return `Too much item for your basket ${this.itemsArr.length} of ${this.limit}`;
    for (let i = 0; i < times; i++) {
      this.addItemToBasket(name);
    }

    return this.itemsArr;
  }

  getTotalSumOfCart() {
    return this.itemsArr.reduce((acc, item) => (acc += item.price), 0);
  }
}

// const basket = new Basket();
// basket.addItemToBasket("bagel");
// basket.addItemToBasket("special-bagel");
// basket.changeBasketLimit(8);

// console.log(basket.limit);

module.exports = Basket;
