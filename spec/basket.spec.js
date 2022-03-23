const Basket = require("../src/basket.js");

// ---------------------------------------- add() testing
describe("Basket add function", () => {
  it("adds an item to the basket", () => {
    // set up
    const basket = new Basket();
    const expected = [{ name: "Blueberry" }];
    // execute
    const result = basket.add("Blueberry");
    // verify
    expect(result).toEqual(expected);
  });

  it("cant add unknown bagel to basket", () => {
    // set up
    const basket = new Basket();
    const expected = "Bagel not found";
    // execute
    const result = basket.add("orange");
    // verify
    expect(result).toEqual(expected);
  });
});

describe("Basket remove function", () => {
  it("removes an item to the basket", () => {
    // set up
    const basket = new Basket();
    basket.add("Blueberry");
    basket.add("Chocolate Chip");

    const expected = [{ name: "Chocolate Chip" }];
    // execute
    const result = basket.remove("Blueberry");
    // verify
    expect(result).toEqual(expected);
  });

  it("cant remove unknown bagel to basket", () => {
    // set up
    const basket = new Basket();
    const expected = "Bagel not found";
    // execute
    const result = basket.remove("Orange");
    // verify
    expect(result).toEqual(expected);
  });

  it("removes all specified bagels from basket", () => {
    // set up
    const basket = new Basket();
    basket.add("Chocolate Chip");
    basket.add("Chocolate Chip");
    basket.add("Chocolate Chip");
    basket.add("Cinnamon Raisin");

    const expected = [{ name: "Cinnamon Raisin" }];
    // execute
    const result = basket.removeAll("Chocolate Chip");
    // verify
    expect(result).toEqual(expected);
  });
});

describe("Basket is full function", () => {
  it("returns an error message when you try to add more than 5 items", () => {
    // set up
    const basket = new Basket();
    basket.add("Blueberry");
    basket.add("Chocolate Chip");
    basket.add("Chocolate Chip");
    basket.add("Blueberry");
    basket.add("Blueberry");
    basket.add("Cinnamon Raisin");
    basket.add("Chocolate Chip");

    const expected = `you've reached the max number of items (5) allowed in your basket.`;
    // execute
    const result = basket.add("Blueberry");
    // verify
    expect(result).toEqual(expected);
  });
});

describe("Basket mac capacity function", () => {
  it("sets a new max capacity for the basket", () => {
    // set up
    const basket = new Basket();

    const expected = 10;
    // execute
    const result = basket.setNewBasketMaxCapacity(10);
    // verify
    expect(result).toEqual(expected);
  });
});
