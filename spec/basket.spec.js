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

  it("the basket is full of bagels", () => {
    //set up
    const basket = new Basket();
    const bagel = new Bagel();

    //execute
    basket.addToBasket(bagel);
    basket.addToBasket(bagel);
    basket.addToBasket(bagel);
    basket.addToBasket(bagel);
    const result = basket.fullBasket();
    //verify
    expect(result).toEqual(true);
  });

  it("the basket is NOT full of bagels", () => {
    //set up
    const basket = new Basket();
    const bagel = new Bagel();

    //execute
    const result = basket.fullBasket();
    //verify
    expect(result).toEqual(false);
  });

  it("create baskets with larger capacity", () => {
    //set up
    const basket = new Basket(4);
    const bagel = new Bagel(1, "Bobs First Bagel");
    const bagel2 = new Bagel(2, "Bobs Second Bagel");
    const bagel3 = new Bagel(3, "Bobs Third Bagel");
    const bagel4 = new Bagel(4, "Bobs Fourth Bagel");
    //execute
    basket.addToBasket(bagel);
    basket.addToBasket(bagel2);
    const result1 = basket.fullBasket();
    basket.addToBasket(bagel3);
    basket.addToBasket(bagel4);
    const result2 = basket.fullBasket();
    //verify
    expect(result1).toEqual(false);
    expect(result2).toEqual(true);
  });
});
