class SpecialOffer {
  constructor(item, options, callback) {
    this.item = item;
    this.options = options;
    this.callback = callback;
  }
  // RETURNS TRUE IF OFFER IS AVAILABLE FOR BASKET
  check = (basket) => {
    const basketItem = basket.getItem(this.item);
    if (basketItem) {
      if (basketItem.quantity >= this.options.requiredQuantity)
        if (this.options.combinedItem) {
          if (basket.includes(this.options.combinedItem)) return true;
          return false;
        } else return true;
    }
    return false;
  };

  apply = (basket) => {
    if (this.check(basket)) return this.callback(basket);
    return undefined;
  };
}

module.exports = SpecialOffer;
