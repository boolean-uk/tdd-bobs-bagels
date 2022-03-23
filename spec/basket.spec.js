//import the js sheet
const Basket = require("../src/basket")
const Item = require("../src/item")

describe("basket", () => {
  it("adds a bagel to a basket", () => {
    // set up
    const basket = new Basket ()
    const itemOne = new Item(1, "bagel")
    const itemTwo = new Item(2, "bagel")
    const expected = [itemOne, itemTwo]

    // execute
    basket.addItemToBasket(itemOne)
    const result = basket.addItemToBasket(itemTwo)

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
    basket.addItemToBasket(itemOne)
    basket.addItemToBasket(itemTwo)
    const result = basket.removeItemFromBasket (2)

    // verify
    expect(result).toEqual(expected)
  })
})

describe("basket", () => {
  it("at max capacity?", () => {
    // set up
    const basket = new Basket ()
    const itemOne = new Item(1, "bagel")
    const itemTwo = new Item(2, "bagel")
    
    const expected = true

    // execute
    basket.addItemToBasket(itemOne)
    basket.addItemToBasket(itemTwo)
    const result = basket.isFull()

    // verify
    expect(result).toEqual(expected)
  })
})

describe("basket", () => {
  it("at max capacity?", () => {
    // set up
    const basket = new Basket ()
    const itemOne = new Item(1, "bagel")
    const itemTwo = new Item(2, "bagel")
    const itemThree = new Item(3, "bagel")
    
    const expected = true

    // execute
    basket.addItemToBasket(itemOne)
    basket.addItemToBasket(itemTwo)
    basket.addItemToBasket(itemThree)
    const result = basket.isFull()

    // verify
    expect(result).toEqual(expected)
  })
})

describe("basket", () => {
  it("at max capacity?", () => {
    // set up
    const basket = new Basket ()
    const itemOne = new Item(1, "bagel")
    const itemTwo = new Item(2, "bagel")
    const itemThree = new Item(3, "bagel")
    
    const expected = false

    // execute
    basket.addItemToBasket(itemOne)
    basket.addItemToBasket(itemTwo)
    basket.addItemToBasket(itemThree)
    const result = basket.isFullManager()

    // verify
    expect(result).toEqual(expected)
  })
})

describe("basket", () => {
  it("at max capacity?", () => {
    // set up
    const basket = new Basket ()
    const itemOne = new Item(1, "bagel")
    const itemTwo = new Item(2, "bagel")
    const itemThree = new Item(3, "bagel")
    const itemFour= new Item(4, "bagel")
    const itemFive = new Item(5, "bagel")
    
    const expected = true

    // execute
    basket.addItemToBasket(itemOne)
    basket.addItemToBasket(itemTwo)
    basket.addItemToBasket(itemThree)
    basket.addItemToBasket(itemFour)
    basket.addItemToBasket(itemFive)
    const result = basket.isFullManager()

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
    const expected = [itemOne, itemTwo]

    // execute
    basket.addItemToBasket(itemOne)
    basket.addItemToBasket(itemTwo)
    const result = basket.removeItemFromBasket (3)

    // verify
    expect(result).toEqual(expected)
  })
})