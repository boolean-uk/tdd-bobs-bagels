class Inventory {
  constructor() {
    this.items = [];
  }

  getItemBySKU = (sku) => {
      return this.items.find(i => i.sku === sku);
  }

  add = (item) => {
    if (this.items.find((i) => i.sku === item.sku)) return false;
    this.items.push(item);
  };

  findOffers = (basket) => {
    const offers = [];
    this.items
      .filter((item) => basket.includes(item))
      .forEach((item) => offers.push(...item.specialOffers));
    return offers;
  };
}

module.exports = Inventory;
