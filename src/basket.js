class Basket {
  constructor(initialItems = 0, addedItems = 1, capacity = 10) {
    this.totalItems = initialItems;
    this.addedItems = addedItems;
    this.capacity = capacity;
    this.items = {};
  }

  addToBasket(item, quantity = 1) {
    if (quantity < 1) return;

    if (!this.items[item]) {
      this.items[item] = 0;
    }

    if (this.items[item] + quantity > this.capacity) {
      console.log('Not enough capacity in the basket');
      return;
    }

    this.items[item] += quantity;
  }

  removeFromBasket() {
    if (this.totalItems > 0) {
      this.totalItems -= 1;
    } else {
      return 'No items to remove';
    }
  }

  capacityReached() {
    if (this.totalItems >= this.capacity) {
      console.log('basket limit reached');
    }
  }

  increaseCapacity(num) {
    this.capacity += num;
  }

  setItemPrice(item, price) {
    this.items[item] = price;
  }

  getItemPrice(item) {
    return this.items[item] ? this.items[item] : 'Item not found';
  }
  getTotalSum() {
    return Object.keys(this.items).reduce((total, item) => {
      const itemPrice = this.getItemPrice(item);
      const itemQuantity = this.items[item];
      return total + (itemPrice * itemQuantity);
    }, 0);
  }
}

module.exports = Basket;
