import fs from 'fs';

class Basket {
  constructor() {
    this.items = {};
    this.prices = {};
    this.capacity = 5;
  }

  loadPricesFromFile() {
    const data = fs.readFileSync('./inventory.json', 'utf-8');
    const inventory = JSON.parse(data).inventory;
    inventory.forEach((item) => {
      const { sku, price } = item;
      this.prices[sku] = parseFloat(price);
    });
  }

  pushToBasket(item) {
    if (this.items[item]) {
      this.items[item]++;
    } else {
      this.items[item] = 1;
    }
  }

  removeItem(item) {
    if (this.items[item]) {
      this.items[item]--;
      if (this.items[item] === 0) {
        delete this.items[item];
      }
    }
  }

  isFull() {
    return Object.keys(this.items).length >= this.capacity;
  }

  increaseCapacity(newCapacity) {
    this.capacity = newCapacity;
  }

  getItemPrice(item) {
    return this.prices[item];
  }

  getTotalCost() {
    let totalSum = 0;
    for (const item in this.items) {
      totalSum += this.items[item] * this.prices[item];
    }
    return totalSum;
  }
}

export default Basket;