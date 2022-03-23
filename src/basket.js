class Basket {
  constructor() {
    this.bagelMenu = [
      { name: "Cinnamon Raisin" },
      { name: "Chocolate Chip" },
      { name: "Blueberry" },
    ];
    this.currentBasket = [];
    this.currentBasketMaxCapacity = 5;
    this.currentBasketCapacity = 0;
  }

  add(name) {
    const selectedBagel = this.bagelMenu.find((bagel) => bagel.name === name);

    if (selectedBagel === undefined) return "Bagel not found";

    // if(this.basketHasSpaceForMoreItems) dont know why this doesnt work but the code directly below does
    if (this.currentBasketCapacity < this.currentBasketMaxCapacity) {
      this.currentBasket.push(selectedBagel);
      this.currentBasketCapacity += 1;

      return this.currentBasket;
    }

    if (this.basketIsFull) {
      return `you've reached the max number of items (${this.currentBasketMaxCapacity}) allowed in your basket.`;
    }
  }

  remove(name) {
    const selectedBagelindex = this.currentBasket.findIndex(
      (bagel) => bagel.name === name
    );

    // if (selectedBagelindex === -1) return "Bagel not found";
    if (selectedBagelindex === -1) return "Bagel not found";

    this.currentBasket.splice(selectedBagelindex, 1);
    this.currentBasketCapacity -= 1;
    return this.currentBasket;
  }

  removeAll(name) {
    this.currentBasket.forEach((bagel) => {
      if (bagel.name === name) this.currentBasketCapacity -= 1;
    });

    return this.currentBasket.filter((bagel) => bagel.name !== name);
  }

  basketHasSpaceForMoreItems() {
    if (this.currentBasketCapacity < this.currentBasketMaxCapacity) {
      return true;
    }
  }

  basketIsFull() {
    if (this.currentBasketCapacity >= this.currentBasketMaxCapacity) {
      return true;
    }
  }

  setNewBasketMaxCapacity(desiredMaxCapacity) {
    if (desiredMaxCapacity > 5 && desiredMaxCapacity <= 20)
      return (this.currentBasketMaxCapacity = desiredMaxCapacity);
  }
}

module.exports = Basket;
