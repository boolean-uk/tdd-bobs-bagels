const Basket = require("../src/basket.js");

describe("Basket for Bob's Bagel", () => {
  it("Add item to the basket", () => {
    // setUp
    const basket = new Basket();
    const expected = [
      {
        name: "bagel",
        id: 1,
        quantity: 1,
        variant: "plain",
        sku: "BGLP",
        price: 0.39,
      },
    ];

    // execute
    const result = basket.addItemToBasket("1x plain-bagel");

    //verify
    expect(result).toEqual(expected);
  });
  it("Removes Item from Basket", () => {
    // setUp
    const basket = new Basket();
    basket.addItemToBasket("1x plain-bagel");
    basket.addItemToBasket("2x onion-bagel");

    const expected = [
      {
        name: "bagel",
        id: 1,
        quantity: 1,
        variant: "plain",
        sku: "BGLP",
        price: 0.39,
      },
    ];

    // execute
    const result = basket.removeItemFromBasket(2);

    //verify
    expect(result).toEqual(expected);
  });
  it("Tells you if your basket is full", () => {
    // setUp
    const basket = new Basket();
    basket.addItemToBasket("4x everything-bagel");
    const expected = `Too much item for your basket 4 of 20`;
    // execute
    const result = basket.addItemToBasket("22x plain-bagel");

    //verify
    expect(result).toEqual(expected);
  });
  it("Set new Limit to the Basket", () => {
    // setUp
    const basket = new Basket();
    const expected = 8;
    // execute
    basket.changeBasketLimit(8);

    //verify
    expect(basket.limit).toEqual(expected);
  });
  it("Message if try to remove something doesnt exist", () => {
    // setUp
    const basket = new Basket();
    basket.addItemToBasket("1x Coffee");
    basket.addItemToBasket("2x plain-bagel");

    const expected = "Item doesn't exist";
    // execute
    const result = basket.removeItemFromBasket(3);

    //verify
    expect(result).toEqual(expected);
  });
  it("Check for price before add to cart", () => {
    // setUp
    const basket = new Basket();
    basket.addItemToBasket("1x plain-bagel");
    basket.addItemToBasket("2x onion-bagel");

    const expected = `The price of your 2x plain-bagel is 0.78 pound`;
    // execute
    const result = basket.checkForPriceBeforeAddToCart("2x plain-bagel");

    //verify
    expect(result).toEqual(expected);
  });
  it("Add multiple favorite to cart", () => {
    // setUp
    const basket = new Basket();

    basket.addItemToBasket("2x Coffee");

    const expected = `Too much item for your basket 2 of 20`;

    // execute
    const result = basket.addItemToBasket("20x plain-bagel");

    //verify
    expect(result).toEqual(expected);
  });
  it("Add multiple favorite to cart", () => {
    // setUp
    const basket = new Basket();

    const expected = [
      {
        name: "bagel",
        id: 1,
        quantity: 4,
        variant: "plain",
        sku: "BGLP",
        price: 1.56,
      },
    ];
    // execute
    const result = basket.addItemToBasket("4x plain-bagel");

    //verify
    expect(result).toEqual(expected);
  });
  it("Get total amount of cart", () => {
    // setUp
    const basket = new Basket();
    basket.addItemToBasket("5x onion-bagel");

    const expected = 2.45;
    // execute
    const result = basket.getTotalSumOfCart();

    //verify
    expect(result).toEqual(expected);
  });
  it("Get total amount of cart", () => {
    // setUp
    const basket = new Basket();
    basket.addItemToBasket("1x plain-bagel");
    basket.addItemToBasket("1x Coffee");
    basket.addItemToBasket("40x Coffee");
    const expected = 1.38;
    // execute
    const result = basket.getTotalSumOfCart();

    //verify
    expect(result).toEqual(expected);
  });
});
