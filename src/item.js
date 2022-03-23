class Item {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.createFormat();
    this.specialOffer;
    this.addSpecialOffer();
  }

  createFormat() {
    this.withoutDiscount = +this.name.match(/\d+/)[0];
    const wholeName = this.name.split(" ");

    const [name, variant] = wholeName[1]?.split("-").reverse();
    this.name = name;
    if (variant !== undefined) this.variant = variant;

    this.createSKU();
    this.createPrice();
  }

  createSKU() {
    let skuName = this.name?.slice(0, 3).toUpperCase();
    const variant = this.variant?.slice(0, 1).toUpperCase();

    if (variant === undefined) {
      return (this.sku = skuName);
    }
    skuName = [...this.name]
      .filter((letter, i) => i % 2 === 0)
      .join()
      .replaceAll(",", "")
      .slice(0, 3)
      .toUpperCase();
    return (this.sku = skuName + variant);
  }

  createPrice() {
    let price;
    this.variant === undefined ? (price = 0.99) : (price = 0.49);
    this.variant === "plain" ? (price = 0.39) : (price = price);
    return (this.price = this.withoutDiscount * price).toFixed(2);
  }

  addSpecialOffer() {
    let offer;
    this.variant === undefined
      ? (offer = ["COF & BGLP", 1.25])
      : (offer = [6, 2.49]);
    this.variant === "plain" ? (offer = [12, 3.99]) : (offer = offer);
    this.offer = offer;
  }

  //   calcDiscount()
}

module.exports = Item;
