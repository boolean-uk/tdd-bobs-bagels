const Bagel = require("../src/bagel.js");
const Basket = require("../src/basket.js");

describe("Basket", () => {
  let basket;

  beforeEach(() => {
    basket = new Basket();
  });

  it("basket is empty", () => {
    const expected = [];
    const result = basket.contents;
    expect(result).toEqual(expected);
  });

  it("get price of bagel before adding to basket", () => {
    const testBagel = new Bagel();
    const expected = testBagel.price;
    const result = basket.getPriceOfBagel();
    expect(result).toEqual(expected);
  });

  it("add item to basket", () => {
    const expected = [new Bagel(1, "blt")];

    const result = basket.addBagel("blt");

    expect(result).toEqual(expected);
  });