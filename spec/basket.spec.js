const BobsBagels = require("../src/basket.js");

describe("Bob's Bagels", function () {
  it("add a bagel to the basket", () => {
    // set up
    const bobsBagels = new BobsBagels();
    const expected = [{ id: 1, description: "Bobs first ever Bagel" }];
    // execute
    const result = bobsBagels.addBagel("Bobs first ever Bagel");
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
});
