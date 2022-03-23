const Cost = require("../src/cost.js");

describe("Cost", () => {
  it("calculate cost of basket", () => {
    // set up
    const newBasket = new Basket();
    const expected = 3.73;
    // execute
    newBasket.createItemUpdateMenu("Bagel Onion", 0.49);
    newBasket.createItemUpdateMenu("Bagel Plain", 0.39);
    newBasket.createItemUpdateMenu("Bagel Everything", 0.49);
    newBasket.createItemUpdateMenu("Bagel Onion", 0.49);
    newBasket.createItemUpdateMenu("Bagel Plain", 0.39);
    newBasket.createItemUpdateMenu("Bagel Everything", 0.49);

    const result = newBasket.createItemUpdateMenu("Coffee", 0.99);
    // verify
    expect(result).toEqual(expected);
  });
});
