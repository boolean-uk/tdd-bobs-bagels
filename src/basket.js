class Basket {
  constructor(itemCapacity = 5) {
    this.items = [];
    this.itemCapacity = itemCapacity;
  }

  getItems = () => this.items

  size = () => this.getItems().length

  capacity = () => this.itemCapacity

  add = (item) => {
      const oldSize = this.size();
    if (this.items.length < this.capacity()) return this.items.push(item) === oldSize +1;
  };


  /**
   * @param item The item to remove
   * @returns True when the item when successfully removed, otherwise false. 
   */
  remove = (item) => {
    return this.items.splice(this.items.indexOf(item), 1).length === 1;
  };
}

module.exports = Basket;
