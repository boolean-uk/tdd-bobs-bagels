class Basket {
    products;
    basketCapacity;
    basketQuantity;
  
    constructor(capacity) {
      this.products = [];
      this.basketCapacity = capacity;
      this.basketQuantity = 0;
    }
}