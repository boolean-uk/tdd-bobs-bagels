class Basket {
  products;
  basketCapacity;
  basketQuantity;

  constructor(capacity) {
    this.products = [];
    this.basketCapacity = capacity;
    this.basketQuantity = 0;
  }

  add(product, quantity) {
    if (!this.isFull(quantity) && quantity > 0) {
      const findResult = this.find(product);

      //if product is already in the basket
      if (findResult.length > 0) {
        findResult[0].quantity += quantity;
      } else {
        //if it is a new product
        this.products.push({
          product,
          quantity,
        });
      }

      this.basketQuantity += quantity;
      return true;
    }

    return false;
  }

  find(product) {
    return this.products.filter((item) => item.product.name === product.name);
  }

  isFull(quantity) {
    return this.basketQuantity + quantity > this.basketCapacity;
  }

  total() {
    return this.products.reduce(
      (previousItem, item) =>
        previousItem.product.price * previousItem.quantity +
        item.product.price * item.quantity
    );
  }
}

module.exports = Basket;
