const Item = require("../src/item");

class Basket {
  constructor() {
    this.currentBasket = [];
    this.currentBasketItemLimit = 5;
  }

  createBagel(name) {}

  addBagelToBasket(name, numOfDesiredbagels = 1) {
    if (this.cantAddBagels(numOfDesiredbagels))
      return "youre trying to add too many bagels";

    for (let i = 0; i < numOfDesiredbagels; i++) {
      const item = new Item(name);
      this.currentBasket.push(item);
    }

    // if (this.basketisOverFlowing()) {
    //   return `you've reached the max number of items (${this.currentBasketItemLimit}) allowed in your basket.`;
    // }

    return this.currentBasket;
  }

  removeBagelFromBasket(name) {
    const selectedBagelIndex = this.currentBasket.findIndex(
      (bagel) => bagel.name === name
    );

    if (selectedBagelIndex === -1) return "Bagel not found";

    this.currentBasket.splice(selectedBagelIndex, 1);
    return this.currentBasket;
  }

  // basketisOverFlowing() {
  //   return this.currentBasket.length > this.currentBasketItemLimit;
  // }

  cantAddBagels(num) {
    return num + this.currentBasket.length > this.currentBasketItemLimit;
  }

  setNewBasketMaxCapacity(desiredNewItemLimit) {
    if (desiredNewItemLimit > 5 && desiredNewItemLimit <= 20)
      return (this.currentBasketItemLimit = desiredNewItemLimit);
  }

  checkoutTotalPrice() {
    let sum = 0;
    for (let item of this.currentBasket) sum += item.price;

    this.currentBasket.reduce((acc, currValue) => acc + currValue, 0);
    // const totalPrice = this.currentBasket.reduce(
    //   (acc, item) => (acc += item.price)
    // );
    // return totalPrice
  }
}
//   basketHasSpaceForMoreItems() {
//     if (this.currentBasket.length < this.currentBasketItemLimit) {
//       return true;
//     }
//     return false;
//   }
// }

// constructor() {
//   this.bagelMenu = [
//     { name: "Cinnamon Raisin", price: "£2.50" },
//     { name: "Chocolate Chip", price: "£2.00" },
//     { name: "Blueberry", price: "£2.30" },
//   ];
//   this.currentBasket = [];
//   this.currentBasketMaxCapacity = 5;
//   this.currentBasketCapacity = 0;
// }
// add(name) {
//   const selectedBagel = this.bagelMenu.find((bagel) => bagel.name === name);
//   if (selectedBagel === undefined) return "Bagel not found";
//   if (this.basketHasSpaceForMoreItems()) {
//     this.currentBasket.push(selectedBagel);
//     this.currentBasketCapacity += 1;
//     return this.currentBasket;
//   }
// if (this.basketIsFull()) {
//   return `you've reached the max number of items (${this.currentBasketMaxCapacity}) allowed in your basket.`;
// }
// }
// remove(name) {
//   const selectedBagelindex = this.currentBasket.findIndex(
//     (bagel) => bagel.name === name
//   );
// if (selectedBagelindex === -1) return "Bagel not found";
//   this.currentBasket.splice(selectedBagelindex, 1);
//   this.currentBasketCapacity -= 1;
//   return this.currentBasket;
// }
// removeAll(name) {
//   this.currentBasket.forEach((bagel) => {
//     if (bagel.name === name) this.currentBasketCapacity -= 1;
//   });
//   return this.currentBasket.filter((bagel) => bagel.name !== name);
// }
// basketHasSpaceForMoreItems() {
//   if (this.currentBasketCapacity < this.currentBasketMaxCapacity) {
//     return true;
//   }
//   return false;
// }
// basketIsFull() {
//   if (this.currentBasketCapacity >= this.currentBasketMaxCapacity) {
//     return true;
//   }
//   return false;
// }
// setNewBasketMaxCapacity(desiredMaxCapacity) {
//   if (desiredMaxCapacity > 5 && desiredMaxCapacity <= 20)
//     return (this.currentBasketMaxCapacity = desiredMaxCapacity);
// }
// checkPrice() {}
// }

module.exports = Basket;
