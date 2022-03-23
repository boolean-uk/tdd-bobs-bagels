const BobsBagels = require("../src/basket.js");

describe("Bob's Bagels", function () {
  it("add a bagel to the basket", () => {
    // set up
    const bobsBagels = new BobsBagels();
    const expected = [{ description: "Plain", price: 1 }];
    // execute
    const result = bobsBagels.addBagel("Plain", 1);
    // verify
    expect(result).toEqual(expected);
  });

  it("remove a bagel from the basket", () => {
    // set up
    const bobsBagels = new BobsBagels();
    const expected = [];
    // execute
    const result = bobsBagels.removeBagel(1);
    // verify
    expect(result).toEqual(expected);
  });

  it("check if basket is full", () => {
    // set up
    const bobsBagels = new BobsBagels();
    const expected = "YOUR BASKET IS FULL";
    // execute
    bobsBagels.addBagel("chocolate", 1);
    bobsBagels.addBagel("plain", 1);
    bobsBagels.addBagel("round", 1);
    bobsBagels.addBagel("salty", 1);
    const result = bobsBagels.isBasketFull();
    // verify
    expect(result).toEqual(expected);
  });

  it("amend the basket capacity", () => {
    // set up
    const bobsBagels = new BobsBagels();
    const expected = 10;
    // execute
    const result = bobsBagels.amendBasketCapacity(10);
    // verify
    expect(result).toEqual(expected);
  });

  it("check if item is in the basket before removing", () => {
    // set up
    const bobsBagels = new BobsBagels();
    const expected = false;
    // execute
    bobsBagels.addBagel("Very Tasty", 1);
    bobsBagels.addBagel("Bagel Extra", 1);
    bobsBagels.addBagel("Bagel Special", 1);
    const result = bobsBagels.isItemValid("Bagel Nonsense");
    // verify
    expect(result).toEqual(expected);
  });

  it("check if item is in the basket before removing", () => {
    // set up
    const bobsBagels = new BobsBagels();
    const expected = true;
    // execute
    bobsBagels.addBagel("Very Tasty", 1);
    bobsBagels.addBagel("Bagel Extra", 1);
    bobsBagels.addBagel("Bagel Special", 1);
    const result = bobsBagels.isItemValid("Bagel Extra");
    // verify
    expect(result).toEqual(expected);
  });

  it("show the price", () => {
    // set up
    const bobsBagels = new BobsBagels();
    const expected = 1;
    // execute
    const result = bobsBagels.price("Plain");
    // verify
    expect(result).toEqual(expected);
  });

  it("add more of the same type to the basket", () => {
    // set up
    const bobsBagels = new BobsBagels();
    const expected = [
      { description: "Plain", price: 1 },
      { description: "Plain", price: 1 },
      { description: "Plain", price: 1 },
    ];
    // execute
    const result = bobsBagels.addBagel("Plain", 3);
    // verify
    expect(result).toEqual(expected);
  });

  it("returns the total sum of the basket items", () => {
    // set up
    const bobsBagels = new BobsBagels();
    const expected = 6;
    // execute
    bobsBagels.addBagel("Plain", 2);
    bobsBagels.addBagel("Not So Plain", 1);
    bobsBagels.addBagel("Very Tasty", 3);
    const result = bobsBagels.totalSum();
    // verify
    expect(result).toEqual(expected);
  });

  // EXTENSION starts here ---------------------

  it("returns the sum of the order", () => {
    // set up
    const bobsBagels = new BobsBagels();
    const expected = 9.5;
    // execute
    bobsBagels.addBagel("Plain", 2);
    bobsBagels.addBagel("Not So Plain", 1);
    bobsBagels.addBagel("Very Tasty", 3);
    const result = bobsBagels.calcTotalSum();
    // verify
    expect(result).toEqual(expected);
  });
});
