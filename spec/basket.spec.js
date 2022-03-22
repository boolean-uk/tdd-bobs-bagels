const Basket = require("../src/basket.js");

describe("", () => {
  it("add bagels in your basket", () => {
    //set up
    const basket = new Basket();
    const expected = ["Plain", "Sesame", "Garlic"];
    //execute
    const result = basket.addToBasket("Plain", "Sesame", "Garlic");
    //verify
    expect(result).toEqual(expected);
  });
});
