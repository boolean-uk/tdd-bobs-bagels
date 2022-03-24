const Manager = require("../src/manager");
const Item = require("../src/item");
// const Costumer = require("../src/costumer");
// var readlineSync = require("readline-sync");

class Basket {
  itemsArr = [];
  currentId = 1;
  limit = 20;
  manager = new Manager();
  totalQuantity;
  groupedItems;
  billBeforeDiscount;

  addItemToBasket(name) {
    const { ...item } = new Item(name, this.currentId);
    let lastQuantity = item.withoutDiscount;
    if (this.isBasketFull(lastQuantity))
      return `Too much item for your basket ${this.totalQuantity} of ${this.limit}`;
    console.log("MOVE FORWARD");
    console.log(this.isBasketFull(lastQuantity));
    this.currentId++;
    this.itemsArr.push(item);
    return this.itemsArr;
  }

  isBasketFull(lastQuantity) {
    this.totalQuantity = this.itemsArr.reduce(
      (acc, item) => (acc += item.withoutDiscount),
      0
    );
    console.log(this.totalQuantity + lastQuantity, this.limit);
    return this.totalQuantity + lastQuantity > this.limit;
  }

  removeItemFromBasket(id) {
    const itemsBeforeRemove = this.itemsArr;
    this.itemsArr = this.itemsArr.filter((item) => item.id !== id);

    return itemsBeforeRemove.length === this.itemsArr.length
      ? "Item doesn't exist"
      : this.itemsArr;
  }

  changeBasketLimit(newLimit) {
    return (this.limit = this.manager.changeBasketLimit(newLimit));
  }

  checkForPriceBeforeAddToCart(item) {
    const { ...currItem } = new Item(item, this.currentId);

    const price = `The price of your ${item} is ${currItem.price} pound`;
    return price;
  }

  getTotalSumOfCart() {
    return this.itemsArr.reduce((acc, item) => (acc += item.price), 0);
  }

  addItemsTogether() {
    this.billBeforeDiscount = [];

    for (let bagel of Object.keys(this.groupedItems)) {
      const itemsTogether = this.groupedItems[bagel].reduce(
        (obj, bagel) => {
          obj.name = bagel.name;
          obj.sku = bagel.sku;
          obj.variant = bagel?.variant;
          obj.id = bagel.id;
          obj.withoutDiscount += bagel.withoutDiscount;
          obj.price += bagel.price;
          obj.offer = bagel.offer;
          obj.priceForOne = bagel.price / bagel.withoutDiscount;

          return obj;
        },
        {
          withoutDiscount: 0,
          price: 0,
        }
      );
      itemsTogether.price = +itemsTogether.price.toFixed(2);
      this.billBeforeDiscount.push(itemsTogether);
    }
    console.log(this.billBeforeDiscount);

    this.applyDiscount();
  }

  groupByVariant() {
    this.groupedItems = this.itemsArr.reduce(function (acc, obj) {
      let key = obj["sku"];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});

    // console.log(this.groupedItems);
  }

  applyDiscount() {
    let discountedBasket = this.billBeforeDiscount.map((bagel) => {
      let discountApplied = 0;
      while (bagel.withoutDiscount >= bagel.offer[0]) {
        discountApplied++;
        console.log(discountApplied);

        bagel.withoutDiscount -= bagel.offer[0];
        bagel.discountedBagels = (bagel.discountedBagels || 0) + bagel.offer[0];
        bagel.totalQuantity = bagel.discountedBagels + bagel.withoutDiscount;

        bagel.price =
          bagel.offer[1] * discountApplied +
          bagel.withoutDiscount * bagel.priceForOne;
      }
      bagel.totalQuantity =
        bagel.totalQuantity || bagel.discountedBagels + bagel.withoutDiscount;
      return bagel;
    });
    console.log(discountedBasket);
  }
}

const basket = new Basket();
// basket.addItemToBasket("2x Coffee");

// console.log(basket.addItemToBasket("3x onion-bagel"));
basket.addItemToBasket("4x plain-bagel");
basket.addItemToBasket("4x plain-bagel");
basket.addItemToBasket("4x plain-bagel");
basket.addItemToBasket("4x onion-bagel");
basket.addItemToBasket("4x onion-bagel");
basket.addItemToBasket("2x onion-bagel");
basket.addItemToBasket("2x onion-bagel");
basket.addItemToBasket("4x Coffee");
basket.addItemToBasket("2x Coffee");
basket.addItemToBasket("2x Coffee");
basket.groupByVariant();
basket.addItemsTogether();

// basket.changeBasketLimit(8);
// console.log(basket.limit);
console.log("-------------------------------------------------");
module.exports = Basket;
