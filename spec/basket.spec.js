const Bagel = require("../src/Bagel.js");

describe("Bagel", () => {
  it("adds a bagel and returns the basket", () => {
    // setup
    const bagel = new Bagel();
    const expected = ["poppy"];

    // execute
    const result = bagel.addToBasket("poppy");

    // verify
    expect(result).toEqual(expected);
  });
});
