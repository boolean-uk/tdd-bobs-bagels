const Item = require("../item");

class InventoryItem extends Item {
  constructor(item, quantity = 0) {
    super(item.sku, item.name, item.price);
    this.quantity = quantity;
    this.specialOffers = [];
  }

  inStock = () => this.quantity > 0;

  addOffer = (spOff) => {
    this.specialOffers.push(spOff);
  };
}

module.exports = InventoryItem;
