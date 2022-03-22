class Bagels {
  bagelMenu = [
    { id: 0, name: "New Yorker", price: 3.69 },
    { id: 1, name: "Philli", price: 2.89 },
    { id: 2, name: "Mexicano", price: 6.99 }
  ];
  basket = [];
  counter = 3;

  createNewBagel(newBagelName, price) {
    const newBagel = { id: this.counter, name: newBagelName, price: price };
    this.bagelMenu.push(newBagel);
    this.counter += 1;
    return this.bagelMenu;
  }

  addItemToBasketByName(nameOfBagel) {
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
}
module.exports = Bagels;
