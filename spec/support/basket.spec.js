const Basket = require("../../src/basket");
const Bagel = require("../../src/bagel");

describe("basket class tests", () => {
  it("should add one bagel to the basket", () => {
    const newBagel = new Bagel("Plain", 3.57);
    const basket = new Basket();

    const resultAdd = basket.add(newBagel, 1);

    const resultQuantity = basket.bagels.filter(
      (item) => item.bagel.name === "Plain"
    )[0].quantity;

    expect(resultAdd).toEqual(true);
    expect(resultQuantity).toEqual(1);
  });
});
