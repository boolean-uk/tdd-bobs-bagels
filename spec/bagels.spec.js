const Bagels = require("../src/basket.js");

describe("Bagels", () => {
  it("check bagel menu", () => {
    // set up
    const newBagel = new Bagels();
    const expected = [
      { id: 0, name: "New Yorker", price: 3.69 },
      { id: 1, name: "Philli", price: 2.89 },
      { id: 2, name: "Mexicano", price: 6.99 }
    ];
    // execute
    const result = newBagel.bagelMenu;
    // verify
    expect(result).toEqual(expected);
  });

  it("creates new bagel, returns new bagel menu", () => {
    // set up
    const newBagel = new Bagels();
    const expected = [
      { id: 0, name: "New Yorker", price: 3.69 },
      { id: 1, name: "Philli", price: 2.89 },
      { id: 2, name: "Mexicano", price: 6.99 },
      { id: 3, name: "African", price: 5.99 }
    ];
    // execute
    newBagel.createNewBagel("African", 5.99);
    const result = newBagel.bagelMenu;
    // verify
    expect(result).toEqual(expected);
  });

  it("adds selected bagel to basket", () => {
    // set up
    const newBagel = new Bagels();
    const expected = [{ id: 3, name: "African", price: 5.99 }];
    // execute
    newBagel.createNewBagel("African", 5.99);

    const result = newBagel.addItemToBasketByName("African");
    // verify
    expect(result).toEqual(expected);
  });

  it("adds two selected bagels to basket", () => {
    // set up
    const newBagel = new Bagels();
    const expected = [
      { id: 3, name: "African", price: 5.99 },
      { id: 2, name: "Mexicano", price: 6.99 }
    ];
    // execute
    newBagel.createNewBagel("African", 5.99);
    newBagel.addItemToBasketByName("African");
    const result = newBagel.addItemToBasketByName("Mexicano");

    // verify
    expect(result).toEqual(expected);
  });

  it("returns basket without item if not on menu", () => {
    // set up
    const newBagel = new Bagels();
    const expected = [];
    // execute
    newBagel.createNewBagel("African", 5.99);
    newBagel.addItemToBasketByName("AfricanSpice");
    const result = newBagel.addItemToBasketByName("MexicanoExtraHot");

    // verify
    expect(result).toEqual(expected);
  });

  it("removes an item by name from basket", () => {
    // set up
    const newBagel = new Bagels();
    const expected = [
      { id: 1, name: "Philli", price: 2.89 },
      { id: 2, name: "Mexicano", price: 6.99 }
    ];
    // execute
    newBagel.createNewBagel("African", 5.99);

    newBagel.addItemToBasketByName("African");
    newBagel.addItemToBasketByName("Philli");
    newBagel.addItemToBasketByName("Mexicano");

    newBagel.addItemToBasketByName("New Yorker");

    newBagel.removeItemByName("New Yorker");
    const result = newBagel.removeItemByName("African");

    // verify
    expect(result).toEqual(expected);
  });
});
