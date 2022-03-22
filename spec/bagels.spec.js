const Bagels = require("../src/basket.js");

describe("Bagels", () => {
  it("adds an item to a basket", () => {
    // set up
    const newBagel = new Bagels();
    const expected = {};
    // execute
    const result = newBagel.function();
    // verify
    expect(result).toEqual(expected);
  });
});
