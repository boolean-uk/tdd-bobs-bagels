class Item {
  counter = 3;
  bagelMenu = [
    { id: 0, name: "New Yorker", price: 3.69 },
    { id: 1, name: "Philli", price: 2.89 },
    { id: 2, name: "Mexicano", price: 6.99 }
  ];

  createNewBagel(newBagelName, price) {
    const newBagel = { id: this.counter, name: newBagelName, price: price };
    this.bagelMenu.push(newBagel);
    this.counter += 1;
    return this.bagelMenu;
  }
}

module.exports = Item;
