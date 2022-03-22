const Basket = require("../src/basket.js");

describe("Basket", () => {
  it("Can add one items to basket", () => {
    //  setup
    const expectedBasket = ["plain"]
    const basket = new Basket();

    const newBasket = basket.add("plain")
    // verify
    expect(newBasket).toEqual(expectedBasket)
  });

  it("Can add two items to basket", () => {
    //  setup
    const expectedBasket = ["onion","plain"]
    const basket = new Basket();
    // execute
    basket.add("onion")

    const newBasket = basket.add("plain")
    // verify
    expect(newBasket).toEqual(expectedBasket)
  });


  it("Can remove item from basket", () => {
    //  setup
    const expectedBasket = ["onion"]
    const basket = new Basket();
    // execute
    basket.add("onion")
    basket.add("plain")

    const newBasket = basket.remove("plain")
    // verify
    expect(newBasket).toEqual(expectedBasket)
  });

});
