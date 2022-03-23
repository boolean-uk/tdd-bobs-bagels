const BobsBagels = require("../src/basket.js");

describe("Bob's Bagels", function () {
  it("add a bagel to the basket", () => {
    // set up
    const bobsBagels = new BobsBagels();
    const expected = [{ id: 1, description: "Bobs first ever Bagel" }];
    // execute
    const result = bobsBagels.addBagel("Bobs first ever Bagel", 1);
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

  it("check if the ID is valid - valid ID", () => {
    // set up
    const bobsBagels = new BobsBagels();
    const expected = true;
    // execute
    bobsBagels.addBagel("cake-1", 1);
    bobsBagels.addBagel("cake-2", 1);
    bobsBagels.addBagel("cake-3", 1);
    bobsBagels.addBagel("cake-4", 1);
    const result = bobsBagels.isIdValid(2);
    // verify
    expect(result).toEqual(expected);
  });

  it("check if the ID is valid - not a valid ID", () => {
    // set up
    const bobsBagels = new BobsBagels();
    const expected = false;
    // execute
    const result = bobsBagels.isIdValid(54);
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
      { id: 1, description: "i-like-this-so-much-i-will-take-three" },
      { id: 2, description: "i-like-this-so-much-i-will-take-three" },
      { id: 3, description: "i-like-this-so-much-i-will-take-three" },
    ];
    // execute
    const result = bobsBagels.addBagel(
      "i-like-this-so-much-i-will-take-three",
      3
    );
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
});
