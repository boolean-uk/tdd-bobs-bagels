const Basket = require("./basket.js");

let newBasket = new Basket();

newBasket.addItemToBasketByName("Bagel Onion");

newBasket.addItemToBasketByName("Coffee");
newBasket.addItemToBasketByName("Coffee");

newBasket.addItemToBasketByName("Bagel Plain");
newBasket = newBasket.addItemToBasketByName("Bagel Everything");

class Cost {
  costAccumulated = 0;
  BGLO = 0;
  BGLP = 0;
  BGLE = 0;
  COF = 0;
  costAcummulated = {
    BGLO: 0,
    BGLP: 0,
    BGLE: 0,
    COF: 0
  };
  totalCost() {
    for (let item of newBasket) {
      this.costAccumulated += item.price;
    }
    return +this.costAccumulated.toFixed(2);
  }

  totalDiscountCost() {
    let accumulated;
    let discountedCost = 0;
    for (let item of newBasket) {
      if (item.SKU === "BGLO") {
        this.BGLO += 1;
      }
      if (item.SKU === "BGLP") {
        this.BGLP += 1;
      }
      if (item.SKU === "BGLE") {
        this.BGLE += 1;
      }
      if (item.SKU === "COF") {
        this.COF += 1;
      }
    }
    accumulated = {
      BGLO: this.BGLO,
      BGLP: this.BGLP,
      BGLE: this.BGLE,
      COF: this.COF
    };

    if (accumulated.COF === 1 && accumulated.BGLP === 1) {
      discountedCost += 1.25;
      accumulated.BGLP = accumulated.BGLP - 1;
      accumulated.COF = accumulated.COF - 1;
    }

    if (accumulated.BGLO > 0 && accumulated.BGLO >= 6) {
      discountedCost +=
        (accumulated.BGLO % 6) * 2.49 +
        Math.floor((accumulated.BGLO % 6) * 0.49);
    } else {
      discountedCost += accumulated.BGLO * 0.49;
    }

    if (accumulated.BGLP > 0 && accumulated.BGLP >= 12) {
      discountedCost +=
        (accumulated.BGLP % 12) * 3.99 +
        Math.floor((accumulated.BGLP % 6) * 0.39);
    } else {
      discountedCost += accumulated.BGLP * 0.39;
    }

    if (accumulated.BGLE > 0 && accumulated.BGLE >= 6) {
      discountedCost +=
        (accumulated.BGLE % 6) * 2.49 +
        Math.floor((accumulated.BGLE % 6) * 0.49);
    } else {
      discountedCost += accumulated.BGLE * 0.49;
    }

    return discountedCost;
  }
}

module.exports = Cost;
