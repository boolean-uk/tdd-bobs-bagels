const Basket = require("../../src/basket");
const Bagel = require("../../src/bagel");

describe("basket class tests", () => {
  it("should add one bagel to the basket", () => {
    const newBagel = new Bagel("Plain", 3.57);
    const basket = new Basket();

    const resultAdd = basket.add(newBagel, 1);

    const resultQuantity = basket.bagels.filter(
      (item) => item.bagel.name === "Plain"
    )[0].quantity;

    expect(resultAdd).toEqual(true);
    expect(resultQuantity).toEqual(1);
  });

  it("should increase quantity of specfic bagel if it is already in the basket", () => {
    const newBagel = new Bagel("Plain", 3.57);
    const basket = new Basket();

    basket.add(newBagel, 1);
    const result = basket.add(newBagel, 3);

    const resultQuantity = basket.bagels.filter(
      (item) => item.bagel.name === "Plain"
    )[0].quantity;

    expect(result).toEqual(true);
    expect(resultQuantity).toEqual(4);
  });

  it("should not increase quantity of specfic bagel if it is already in the basket", () => {
    const newBagel = new Bagel("Plain", 3.57);
    const basket = new Basket();

    basket.add(newBagel, 1);
    const result = basket.add(newBagel, 10);

    const resultQuantity = basket.bagels.filter(
      (item) => item.bagel.name === "Plain"
    )[0].quantity;

    expect(result).toEqual(false);
    expect(resultQuantity).toEqual(1);
  });

  it("should not add bagel if given quantity is invalid", () => {
    const newBagel = new Bagel("Plain", 3.57);
    const basket = new Basket();

    const result = basket.add(newBagel, -4);

    const resultLength = basket.bagels.filter(
      (item) => item.bagel.name === "Plain"
    ).length;

    expect(result).toEqual(false);
    expect(resultLength).toEqual(0);
  });

  it("should remove specific quantity of bagels from the basket", () => {
    const newBagel = new Bagel("Plain", 3.57);
    const basket = new Basket();

    basket.add(newBagel, 4);
    const result = basket.remove(newBagel, 2);

    const resultQuantity= basket.bagels.filter(
      (item) => item.bagel.name === "Plain"
    )[0].quantity;

    expect(result).toEqual(true);
    expect(resultQuantity).toEqual(2);

  })

  it("should not remove if bagel with given name does not exist", () => {
    const newBagel = new Bagel("Plain", 3.57);
    const invalidBagel = new Bagel("Poppy", 3);
    const basket = new Basket();

    basket.add(newBagel, 4);
    const result = basket.remove(invalidBagel, 2);

    expect(result).toEqual(false);

  })

});
