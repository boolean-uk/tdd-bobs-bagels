class Bagel {
  constructor() {
    this.basket = [];
    this.capacity = 5;
    this.priceList = {
      plain: 2,
      cheese: 3,
      cinnamon: 3,
      raisins: 3,
      poppy: 4,
      sesame: 4,
    };
    console.log("Basket", this.priceList);
  }

  addToBasket(name, num = 1) {
    const bagelNameArr = Object.keys(this.priceList);
    if (!bagelNameArr.includes(name)) return "Please add bagels from the list";

    console.log("Before Loop", this.basket);
    for (let i = 0; i < num; i++) {
      this.basket.push(name);
    }
    return this.basket;
  }

  removeFromBasket(name) {
    return this.basket.includes(name)
      ? this.basket.filter((bagel) => bagel !== name)
      : "You have not order this bagel";
  }

  isFull() {
    const bagelsLeft = this.capacity - this.basket.length;

    return this.basket.length >= this.capacity
      ? "Your basket is full"
      : `Continue to order; ${bagelsLeft} bagels left`;
  }

  createBigBasket() {
    if (this.basket.length >= this.capacity) this.capacity = 12;
  }

  checkPrice(name) {
    const priceListArr = Object.entries(this.priceList);
    const nameAndPrice = priceListArr.find(
      (priceList) => priceList[0] === name
    );

    return `bagel: ${nameAndPrice[0]}, price: $${nameAndPrice[1]}`;
  }

  checkOut() {
    const bagelPriceArr = this.basket.map((bagel) => this.priceList[bagel]);
    const totalSum = bagelPriceArr.reduce(
      (firstPrice, nextPrice) => firstPrice + nextPrice,
      0
    );
    return `total: $${totalSum}`;
  }
}

module.exports = Bagel;
