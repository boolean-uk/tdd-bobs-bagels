const Basket = require("../src/basket.js")

describe("Basket", () => {
  it("creates a Basket item", () => {
    // set up
    const basket = new Basket() // Creating basket which calls the constructor
    console.log("empty basket created", basket.items) // should print out empty array which is inside constructor
    const item = {
      name: "chocolateBagel",
      price: 3
    }
    const expected = [{
      name: "chocolateBagel",
      price: 3
    }] 
    // execute
    const result = basket.add(item)
    // verify
    expect(result).toEqual(expected)
  })

})