class Bagels {
  bagelMenu = [
    { id: 0, name: "New Yorker", price: 3.69 },
    { id: 1, name: "Philli", price: 2.89 },
    { id: 2, name: "Mexicano", price: 6.99 }
  ];
  basket = [];
  counter = 3;
  #basketCapacity;

  constructor() {
    this.#basketCapacity = 5;
    this.str;
  }

  get basketCapacity() {
    return this.#basketCapacity;
  }

  set basketCapacity(newCapacity) {
    return (this.#basketCapacity = newCapacity);
  }

  createNewBagel(newBagelName, price) {
    const newBagel = { id: this.counter, name: newBagelName, price: price };
    this.bagelMenu.push(newBagel);
    this.counter += 1;
    return this.bagelMenu;
  }

  addItemToBasketByName(nameOfBagel) {
    if (this.basket.length === this.#basketCapacity) {
      return (this.str = `I'm afraid your basket is full`);
    }
    for (let item of this.bagelMenu) {
      if (item.name === nameOfBagel) {
        this.basket.push(item);
        return this.basket;
      }
    }
    console.log("Sorry we do not have your selection");
    return this.basket;
  }

  removeItemByName(nameItemToRemove) {
    this.basket.map((item, index) => {
      if (item.name === nameItemToRemove) {
        this.basket.splice(index, 1);
      }
    });
    return this.basket;
  }

  isMyBasketFull() {
    if (this.basket.length === this.#basketCapacity) {
      return (this.str = `I'm afraid your basket is full`);
    }
    if (this.basket.length < this.#basketCapacity) {
      const spareCapacity = this.#basketCapacity - this.basket.length;
      return (this.str = `You can buy another ${spareCapacity} bagels`);
    }
    if (this.basket.length > this.#basketCapacity) {
      const overCapacity = this.basket.length - this.#basketCapacity;
      return (this.str = `Sorry, you are over capacity, please return ${overCapacity} bagels`);
    }
  }
}
module.exports = Bagels;
