const Basket = require("../src/basket.js");
const Item = require("../src/item.js");

describe("Basket", () => {
  it("check bagel menu", () => {
    // set up
    const newBagel = new Basket();
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
    const newBagel = new Basket();
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
    const newBagel = new Basket();
    const expected = [{ id: 3, name: "African", price: 5.99 }];
    // execute
    newBagel.createNewBagel("African", 5.99);

    const result = newBagel.addItemToBasketByName("African");
    // verify
    expect(result).toEqual(expected);
  });

  it("adds two selected bagels to basket", () => {
    // set up
    const newBagel = new Basket();
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
    const newBagel = new Basket();
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
    const newBagel = new Basket();
    const expected = [
      // { id: 0, name: "New Yorker", price: 3.69 },
      { id: 1, name: "Philli", price: 2.89 },
      { id: 2, name: "Mexicano", price: 6.99 },
      { id: 3, name: "African", price: 5.99 }
    ];
    // execute
    newBagel.createNewBagel("African", 5.99);

    newBagel.addItemToBasketByName("New Yorker");
    newBagel.addItemToBasketByName("Philli");
    newBagel.addItemToBasketByName("Mexicano");
    newBagel.addItemToBasketByName("African");

    // newBagel.removeItemByName("New Yorker");
    const result = newBagel.removeItemByName("New Yorker");

    // verify
    expect(result).toEqual(expected);
  });

  it("returns string if item to remove does not exist", () => {
    // set up
    const newBagel = new Basket();
    const expected = `No such item to remove. Get a grip !!!!`;
    // execute
    newBagel.createNewBagel("African", 5.99);

    newBagel.addItemToBasketByName("African");
    newBagel.addItemToBasketByName("Philli");
    newBagel.addItemToBasketByName("Mexicano");

    newBagel.addItemToBasketByName("New Yorker");

    const result = newBagel.removeItemByName("New Yorker Super Duper");

    // verify
    expect(result).toEqual(expected);
  });

  it("checks basket capacity #basketCapacity", () => {
    // set up
    const newBagel = new Basket();
    const expected = 5;
    // execute
    const result = newBagel.basketCapacity;
    // verify
    expect(result).toEqual(expected);
  });

  it("sets new #basketCapacity", () => {
    // set up
    const newBagel = new Basket();
    const expected = 8;
    // execute
    newBagel.basketCapacity = 8;
    const result = newBagel.basketCapacity;
    // verify
    expect(result).toEqual(expected);
  });

  it("on basket capacity, returns string", () => {
    // set up
    const newBagel = new Basket();
    const expected = `I'm afraid your basket is full`;
    // execute
    newBagel.createNewBagel("African", 5.99);

    newBagel.addItemToBasketByName("African");
    newBagel.addItemToBasketByName("Philli");
    newBagel.addItemToBasketByName("Mexicano");
    newBagel.addItemToBasketByName("Mexicano");
    newBagel.addItemToBasketByName("New Yorker");

    const result = newBagel.isMyBasketFull();

    // verify
    expect(result).toEqual(expected);
  });

  it("two under basket capacity, returns string", () => {
    // set up
    const newBagel = new Basket();
    const expected = `You can buy another 2 bagels`;
    // execute
    newBagel.createNewBagel("African", 5.99);

    newBagel.addItemToBasketByName("Mexicano");
    newBagel.addItemToBasketByName("Mexicano");
    newBagel.addItemToBasketByName("New Yorker");

    const result = newBagel.isMyBasketFull();

    // verify
    expect(result).toEqual(expected);
  });

  it("basket on capacity, want to add another", () => {
    // set up
    const newBagel = new Basket();
    const expected = `I'm afraid your basket is full`;
    // execute
    newBagel.createNewBagel("African", 5.99);

    newBagel.addItemToBasketByName("African");
    newBagel.addItemToBasketByName("Philli");
    newBagel.addItemToBasketByName("Mexicano");
    newBagel.addItemToBasketByName("Mexicano");
    newBagel.addItemToBasketByName("New Yorker");
    newBagel.addItemToBasketByName("New Yorker");

    const result = newBagel.addItemToBasketByName("New Yorker");

    // verify
    expect(result).toEqual(expected);
  });

  it("returns a string with each item and it's price", () => {
    // set up
    const newBagel = new Basket();
    const expected = "Your African will cost you $5.99.";
    // execute
    newBagel.createNewBagel("African", 5.99);

    newBagel.addItemToBasketByName("African");

    const result = newBagel.pricePerItem();

    // verify
    expect(result).toEqual(expected);
  });

  it("add more than one of same bagel", () => {
    // set up
    const newBagel = new Basket();
    const expected = [
      { id: 3, name: "African", price: 5.99 },
      { id: 3, name: "African", price: 5.99 },
      { id: 3, name: "African", price: 5.99 },
      { id: 3, name: "African", price: 5.99 }
    ];
    // execute
    newBagel.createNewBagel("African", 5.99);

    newBagel.addItemToBasketByName("African");
    newBagel.addItemToBasketByName("African");
    newBagel.addItemToBasketByName("African");

    const result = newBagel.addItemToBasketByName("African");
    // verify
    expect(result).toEqual(expected);
  });

  it("returns total for basket", () => {
    // set up
    const newBagel = new Basket();
    const expected = "$19.56";
    // execute
    newBagel.createNewBagel("African", 5.99);

    newBagel.addItemToBasketByName("African");
    newBagel.addItemToBasketByName("Mexicano");
    newBagel.addItemToBasketByName("New Yorker");
    newBagel.addItemToBasketByName("Philli");

    const result = newBagel.totalForBasket();

    // verify
    expect(result).toEqual(expected);
  });
});
