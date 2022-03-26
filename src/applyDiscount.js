class ApplyDiscount {
  discountedBasket;

  constructor(billBeforeDiscount) {
    this.billBeforeDiscount = billBeforeDiscount;
    this.applyDiscount();
  }

  applyDiscount() {
    let leftoverBagels = 0;
    let leftoverCoffee = 0;
    this.discountedBasket = this.billBeforeDiscount.map((bagel) => {
      let discountApplied = 0;
      let originalPrice = bagel.price;
      while (bagel.withoutDiscount >= bagel.offer[0]) {
        discountApplied++;

        bagel.withoutDiscount -= bagel.offer[0];
        bagel.discountedBagels = (bagel.discountedBagels || 0) + bagel.offer[0];
        bagel.totalQuantity = bagel.discountedBagels + bagel.withoutDiscount;

        bagel.price = +(
          bagel.offer[1] * discountApplied +
          bagel.withoutDiscount * bagel.priceForOne
        ).toFixed(2);
      }
      if (bagel.sku === "BGLP") leftoverBagels = bagel.withoutDiscount;
      if (bagel.sku === "COF") leftoverCoffee = bagel.withoutDiscount;
      bagel.savings = +(originalPrice - bagel.price).toFixed(2);
      bagel.totalQuantity =
        bagel.totalQuantity ||
        bagel.discountedBagels + bagel.withoutDiscount ||
        bagel.withoutDiscount;
      return bagel;
    });

    this.discountForCoffee(leftoverBagels, leftoverCoffee);
  }

  discountForCoffee(leftoverBagels, leftoverCoffee) {
    let lowestNum =
      leftoverBagels <= leftoverCoffee ? leftoverBagels : leftoverCoffee;
    if (leftoverBagels === 0 || leftoverCoffee === 0)
      return this.discountedBasket;
    const coffeeAndBagel = {
      name: "Coffee and Plain Bagel",
      text: "DISCOUNT APPLIED",
      sku: "C&B",
    };

    for (let i = 0; i < lowestNum; i++) {
      if (leftoverBagels > 0 && leftoverCoffee > 0) {
        coffeeAndBagel.totalQuantity = i + 1;
        coffeeAndBagel.price = (i + 1) * 1.25;
        coffeeAndBagel.price = +coffeeAndBagel.price.toFixed(2);
        coffeeAndBagel.savings = +((1.38 - 1.25) * (i + 1)).toFixed(2);

        leftoverCoffee--;
      }
    }
    this.discountedBasket = this.discountedBasket.map((bagel) => {
      if (bagel.sku === "COF" || bagel.sku === "BGLP") {
        bagel.totalQuantity -= lowestNum;
        bagel.withoutDiscount -= lowestNum;
        bagel.price -= bagel.priceForOne * lowestNum;
        bagel.price = +bagel.price.toFixed(2);
      }

      return bagel;
    });
    this.discountedBasket.push(coffeeAndBagel);

    this.discountedBasket = this.discountedBasket.filter(
      (item) => item.totalQuantity !== 0
    );

    return this.discountedBasket;
  }
}

module.exports = ApplyDiscount;
