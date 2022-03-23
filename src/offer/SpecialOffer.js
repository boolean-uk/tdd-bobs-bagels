class SpecialOffer {
  constructor (item, options, callback = undefined) {
    this.item = item
    this.options = options
    if (callback) { this.callback = callback }
  }

  // RETURNS TRUE IF OFFER IS AVAILABLE FOR BASKET
  check (basket) {
    const basketItem = basket.getItem(this.item)
    if (basketItem) {
      if (basketItem.quantity >= this.options.requiredQuantity) {
        if (this.options.combinedItem) {
          if (basket.includes(this.options.combinedItem)) return true
          return false
        } else return true
      }
    }
    return false
  };

  apply (basket) {
    if (this.check(basket)) {
      if (this.callback) { return this.callback(basket) } else {
        const bItem = basket.getItem(this.item)
        const offerRepetition = Math.floor(bItem.quantity / this.options.requiredQuantity)
        if (this.options.recursive) {
          bItem.offerPrice =
            this.options.price * offerRepetition +
            bItem.price *
              (bItem.quantity - this.options.requiredQuantity * offerRepetition)
        } else {
          bItem.offerPrice =
            this.options.price + bItem.price * (bItem.quantity - this.options.requiredQuantity)
        }
        return bItem.offerPrice
      }
    }
    return undefined
  };
}

module.exports = SpecialOffer
