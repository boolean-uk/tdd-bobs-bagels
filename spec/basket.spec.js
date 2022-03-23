const Basket = require("../src/basket.js");
const Bagel = require("../src/bagel.js");

describe("", () => {
  it("add a bagel in your basket", () => {
    //set up
    const basket = new Basket();
    const bagel = new Bagel();
    const expected = [bagel];
    //execute
    const result = basket.addToBasket(bagel);
    //verify
    expect(result).toEqual(expected);
  });

  it("remove bagel from your basket", () => {
    //set up
    const basket = new Basket();
    const bagel = new Bagel("Plain");
    const expected = [];
    //execute
    basket.addToBasket(bagel);
    const result = basket.removeFromBasket("Plain");
    //verify
    expect(result).toEqual(expected);
  });

  it("is the basket full of bagels?", () => {
    //set up
    const basket = new Basket();
    const bagel = new Bagel();
    const expected = "Your basket is full";
    //execute
    basket.addToBasket(bagel);
    basket.addToBasket(bagel);
    basket.addToBasket(bagel);
    basket.addToBasket(bagel);
    const result = basket.fullBasket();
    //verify
    expect(result).toEqual(expected);
  });

  it("create baskets with larger capacity", () => {
    //set up
    const basket = new Basket();
    const expected = {
      basketOne: "Capacity 5",
      basketTwo: "Capacity 8",
      basketThree: "Capacity 10",
    };
    //execute
    const result = basket.createBaskets();
    //verify
    expect(result).toEqual(expected);
  });
});
