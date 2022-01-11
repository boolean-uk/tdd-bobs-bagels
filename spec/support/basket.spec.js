const Basket = require("../src/basket.js")

describe("Basket", () => {
  let basket

  beforeEach(() => {
    basket = new Basket()
  })

  
  it("new basket is empty array", () => {
    // set up
    const expected = []
    // execute
    // const result = todoList.create("turn the heating on!")
    // verify
    expect(basket.items).toEqual(expected)
  })

})