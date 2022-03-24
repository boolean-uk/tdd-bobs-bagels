const Manager = require("../src/manager");
const Item = require("../src/item");
const ApplyDiscount = require("../src/applyDiscount");
// var readlineSync = require("readline-sync");

class Basket {
  itemsArr = [];
  currentId = 1;
  limit = 20;
  manager = new Manager();
  totalQuantity;
  groupedItems;
  billBeforeDiscount;
  discountedBasket;

  addItemToBasket(name) {
    const { ...item } = new Item(name, this.currentId);
    let lastQuantity = item.withoutDiscount;
    if (this.isBasketFull(lastQuantity))
      return `Too much item for your basket ${this.totalQuantity} of ${this.limit}`;
    this.currentId++;
    this.itemsArr.push(item);
    this.groupByVariant();
    this.addItemsTogether();
    return this.itemsArr;
  }

  isBasketFull(lastQuantity) {
    this.totalQuantity = this.itemsArr.reduce(
      (acc, item) => (acc += item.withoutDiscount),
      0
    );

    return this.totalQuantity + lastQuantity > this.limit;
  }

  removeItemFromBasket(id) {
    const itemsBeforeRemove = this.itemsArr;
    this.itemsArr = this.itemsArr.filter((item) => item.id !== id);
    console.log("ITEM ARRAY", this.itemsArr);
    this.groupByVariant();
    this.addItemsTogether();

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
  }

  applyDiscount() {
    return (this.discountedBasket = new ApplyDiscount(this.billBeforeDiscount));
  }

  getTotalSumOfCart() {
    for (let key of Object.keys(this.discountedBasket)) {
      return this.discountedBasket[key]
        .reduce((acc, item) => {
          return (acc += item.price);
        }, 0)
        .toFixed(2);
    }
  }

  checkout() {
    let today = new Date();

    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    let dateTime = date + " " + time;
    let totalSaving = 0;
    let receipt = `
    ~~~ Bob's Bagels ~~~  
     
    ${dateTime} 

    --------------------- \n`;
    for (let key of Object.keys(this.discountedBasket)) {
      this.discountedBasket[key].forEach((item) => {
        totalSaving += item.savings || 0;
        if (item.variant) {
          receipt += `   ${item.variant} ${item.name} ${item.totalQuantity} = £${item.price} \n`;
          receipt +=
            item.savings > 0
              ? `                 (£-${item.savings > 0 ? item.savings : ""})\n`
              : "";
        } else if (!item.variant) {
          receipt += `  ${item.name} ${item.totalQuantity} = £${item.price} \n`;
          receipt +=
            item.savings > 0
              ? `                 (£-${item.savings > 0 ? item.savings : ""})\n`
              : "";
        }
      });
      receipt += `   
   ----------------------- \n`;
      break;
    }
    receipt += `   Total £${this.getTotalSumOfCart()}\n`;

    receipt += `    
  You saved a total of £${totalSaving}
        on this shop

        Thank you
      for your order!
       `;
    console.log(receipt);
  }
}

const basket = new Basket();
// basket.addItemToBasket("2x Coffee");

basket.addItemToBasket("3x Onion-Bagel");
basket.addItemToBasket("4x Plain-Bagel");
// basket.addItemToBasket("4x Plain-Bagel");
// basket.addItemToBasket("4x Plain-Bagel");
// basket.addItemToBasket("7x Rainbow-Bagel");
// basket.addItemToBasket("2x plain-bagel");
// basket.addItemToBasket("4x onion-bagel");
// basket.addItemToBasket("4x onion-bagel");
// basket.addItemToBasket("2x onion-bagel");
// basket.addItemToBasket("2x onion-bagel");
// basket.addItemToBasket("4x Coffee");
basket.addItemToBasket("2x Coffee");
basket.addItemToBasket("2x Coffee");
basket.addItemToBasket("2x Coffee");
basket.addItemToBasket("3x Finom-Bagel");
// basket.removeItemFromBasket(1);
// console.log(basket.getTotalSumOfCart());
basket.checkout();

// basket.changeBasketLimit(8);
// console.log(basket.limit);

module.exports = Basket;
