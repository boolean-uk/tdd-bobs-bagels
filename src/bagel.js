class Bagel {
  constructor(name, price) {
    this.price = price;
    this.name = name;
  }

  getPrice() {
    return this.price;
  }
}

module.exports = Bagel;