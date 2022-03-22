class Basket {
  constructor(itemCapacity = 5) {
    this.items = [];
    this.itemCapacity = itemCapacity;
  }

  getItems = () => this.items;

  itemCount = () => this.items.length;

  size = () => this.getItems().reduce((p, c) => p + c.quantity, 0);

  capacity = () => this.itemCapacity;

  add = (item) => {
    const oldSize = this.size();
    if (oldSize + item.quantity > this.capacity()) return false;
    if (this.items.length < this.capacity())
      return this.items.push(item) === oldSize + 1;
  };

  /**
   * @param item The item to remove
   * @returns True when the item was successfully removed, otherwise false.
   */
  remove = (item) => {
    const index = this.items.indexOf(item);
    return index === -1 ? false : this.items.splice(index, 1).length === 1;
  };

  basketPrice = () => {
    return this.items.reduce((p, c) => p + c.totalPrice(), 0);
  };
}

module.exports = Basket;
