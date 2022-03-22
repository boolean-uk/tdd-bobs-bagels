const Basket = require("../src/basket.js");

describe("", () => {
  it("add a bagel in your basket", () => {
    //set up
    const basket = new Basket();
    const expected = ["Plain"];
    //execute
    const result = basket.addToBasket("Plain");
    //verify
    expect(result).toEqual(expected);
  });

  it("remove bagel from your basket", () => {
    //set up
    const basket = new Basket();
    const expected = [];
    //execute
    basket.addToBasket("Plain");
    const result = basket.removeFromBasket();
    //verify
    expect(result).toEqual(expected);
  });
});
