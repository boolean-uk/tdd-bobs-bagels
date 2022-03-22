class Basket {
  constructor() {
    this.bagelMenu = [
      { name: "Cinnamon Raisin" },
      { name: "Chocolate Chip" },
      { name: "Blueberry" },
    ];
    this.currentBasket = [];
  }

  add(name) {
    const selectedBagel = this.bagelMenu.find((bagel) => bagel.name === name);

    if (selectedBagel === undefined) return "Bagel not found";

    this.currentBasket.push(selectedBagel);
    return this.currentBasket;
  }

  remove(name) {
    const selectedBagelindex = this.currentBasket.findIndex(
      (bagel) => bagel.name === name
    );

    if (selectedBagelindex === -1) return "Bagel not found";

    this.currentBasket.splice(selectedBagelindex, 1);
    return this.currentBasket;
  }

  removeAll(name) {
    return this.currentBasket.filter((bagel) => bagel.name !== name);
  }
}

module.exports = Basket;
