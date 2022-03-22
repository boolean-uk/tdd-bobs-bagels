const Item = require("../item");

// PSUEDOCODE FOR SPECIAL OFFERS
// A given offer could be combined with multiple items or multiple items
// We then need a way to use both in a modular manner
// OfferType is a way to seperate both types (enum)
// each offer has its own options (object)

class SpecialOfferType {
  static multiple = "multiple";
  static combined = "combined";
}

class SpecialOfferOptions {
  constructor(requiredQuantity, combinedItem) {
    this.requiredQuantity = requiredQuantity;
    this.combinedItem = combinedItem;
    
  }
}

class SpecialOffer {
  constructor(type, typeOptions) {
    this.type = type;
    this.typeOptions = typeOptions;
  }

  check = (basket) => {
    this.typeOptions.item;
  };
}

class InventoryItem extends Item {
  constructor(item, quantity = 0) {
    super(item.sku, item.name, item.price);
    this.quantity = quantity;
    this.specialOffers = [];
  }

  inStock = () => this.quantity > 0;

  addSpecialOffer = (spOff) => {
    this.specialOffers.push(spOff);
  };
}

module.exports = InventoryItem;
