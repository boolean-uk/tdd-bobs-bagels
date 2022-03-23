//import the js sheet
const Basket = require("../src/basket")
const Item = require("../src/item")

describe("basket", () => {
  it("adds a bagel to a basket", () => {
    // set up
    const basket = new Basket ()
    const itemOne = new Item(1, "bagel")
    const expected = [itemOne]

    // execute
    const result = basket.addBagelToBasket(itemOne)

    // verify
    expect(result).toEqual(expected)
  })
})

describe("basket", () => {
  it("adds a bagel to a basket", () => {
    // set up
    const basket = new Basket ()
    const itemOne = new Item(1, "bagel")
    const itemTwo = new Item(2, "bagel")
    const expected = [itemOne, itemTwo]

    // execute
    basket.addBagelToBasket(itemOne)
    const result = basket.addBagelToBasket(itemTwo)

    // verify
    expect(result).toEqual(expected)
  })
})

describe("basket", () => {
  it("removes a bagel to a basket", () => {
    // set up
    const basket = new Basket ()
    const itemOne = new Item(1, "bagel")
    const itemTwo = new Item(2, "bagel")
    const expected = [itemOne]

    // execute
    basket.addBagelToBasket(itemOne)
    basket.addBagelToBasket(itemTwo)
    const result = basket.removeBagelFromBasket (2)

    // verify
    expect(result).toEqual(expected)
  })
})