const bagels = [{ name: "Blueberry", price: 2.99 }];

class Item {
  constructor(name) {
    this.name = name;
    this.price = "£2.99";
    // this.isvalid = false;
    // this.initilise();
  }

  initilise() {
    // test if name supplied is valid
    // set price
    // set isvalid to true
  }

  checkPrice() {
    return this.price;
  }
}
module.exports = Item;
