const Basket = require("../src/basket.js")

const small = 5
const medium = 10
const large = 15

describe("Basket", () => {
  let basket

  beforeEach(() => {
    basket = new Basket()
  })

  
  it("new basket is empty array", () => {
    const expected = []
    expect(basket.items).toEqual(expected)
  })

  it("add items to basket", () => {
    const expected = [{
      "sku": "BGLO",
      "price": "0.49",
      "name": "Bagel",
      "variant": "Onion"
    }]
    basket.add("BGLO")
    expect(basket.items).toEqual(expected)
  })

  it("add existing items to basket", () => {
    const expected = [{
      "sku": "BGLO",
      "price": "0.49",
      "name": "Bagel",
      "variant": "Onion"
    },
    {
      "sku": "BGLO",
      "price": "0.49",
      "name": "Bagel",
      "variant": "Onion"
    }]
    basket.add("BGLO")
    expect(basket.add("BGLO")).toEqual("This item is already in your basket")
    expect(basket.items).toEqual(expected)
  })

  it("remove items to basket", () => {
    const expected = [{
      "sku": "BGLS",
      "price": "0.49",
      "name": "Bagel",
      "variant": "Sesame"
    }]
    basket.add("BGLO")
    basket.add("BGLS")
    basket.remove("BGLO")
    expect(basket.items).toEqual(expected)
  })

  it("know if full and not full", () => {
    basket.add("BGLO")
    basket.add("BGLS")
    expect(basket.isFull()).toEqual(false)
  })

  it("know if full and is full", () => {
    basket.add("BGLO")
    basket.add("BGLS")
    basket.add("BGLO")
    basket.add("BGLS")
    basket.add("BGLO")
    expect(basket.isFull()).toEqual(true)
  })

  it("know if basket is full so cannot add items", () => {
    const expected = "You cannot add more items, your basket is full"
    basket.add("BGLO")
    basket.add("BGLS")
    basket.add("BGLO")
    basket.add("BGLS")
    basket.add("BGLO")
    expect(basket.add("BGLO")).toEqual(expected)
    expect(basket.items.length).toEqual(5)
  })

  it("change basket size", () => {
    basket.add("BGLO")
    basket.add("BGLS")
    basket.add("BGLO")
    basket.add("BGLS")
    basket.add("BGLO")
    basket.add("BGLO")
    basket.changeBasketSize(medium)
    basket.add("BGLS")
    basket.add("BGLO")
    expect(basket.items.length).toEqual(7)
    expect(basket.size).toEqual(10)
  })

  it("cannot change basket size to random", () => {
    expect(basket.changeBasketSize(250)).toEqual(`Pick small, medium or large`)
    expect(basket.size).toEqual(5)
  })

  it("change basket size", () => {
    const expected = `Pick a basket bigger than 7`
    basket.add("BGLO")
    basket.add("BGLS")
    basket.add("BGLO")
    basket.add("BGLS")
    basket.add("BGLO")
    basket.changeBasketSize(medium)
    basket.add("BGLS")
    basket.add("BGLO")
    expect(basket.changeBasketSize(small)).toEqual(expected)
    expect(basket.size).toEqual(10)
  
  })


  it("cannot remove items that are not in basket", () => {
    const expected = "You cannot remove items that are not in your basket"
    basket.add("BGLO")
    basket.add("BGLS")
    basket.remove("BBB")
    expect(basket.remove("BBB")).toEqual(expected)
  })

  it("check if item exists in basket, not there", () => {
    basket.add("BGLO")
    basket.add("BGLS")
    expect(basket.inBasket("BGLW")).toEqual(0)
  })

  it("check if item exists in basket, not there", () => {
    basket.add("BGLO")
    basket.add("BGLS")
    expect(basket.inBasket("BGLO")).toEqual(1)
  })

  it("check price of basket", () => {
    // set up
    // const expected = "You cannot remove items that are not in your basket"
    // execute
    // const result = todoList.create("turn the heating on!")
    // verify
    basket.add("BGLO")
    basket.add("BGLS")
    basket.add("BGLO")
    basket.add("BGLS")
    expect(basket.priceOfBasket()).toEqual(1.96)
  })

  it("check price of item", () => {
    
    expect(basket.priceOfBagel("BGLO")).toEqual("0.49")
  })


})