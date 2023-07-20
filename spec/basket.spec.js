const { Basket } = require("../src/basket.js")

describe("Basket tests", () => {

  it('should create a Basket class object', () => {
    // Setup
    const basket = new Basket(10);

    // Test
    expect(basket).toBeDefined
  })
  
}) 