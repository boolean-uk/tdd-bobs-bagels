import Basket from "../../src/basket.js"
import Item from "../../src/item.js"

describe("basket", () => {
  it("upon creation basket is empty", () => {
    const myBasket = new Basket(3)
    expect(myBasket.capacity).toEqual(3)
    expect(myBasket.isFull()).toBeFalse()
    expect(myBasket.items).toEqual([])
  })
})

describe("filling basket", () => {
  it("adding items to basket", () => {
    const myBasket = new Basket(2)
    const item = new Item("TEST", "Test", 1.23)
    myBasket.addItem(item)
    expect(myBasket.isFull()).toBeFalse()
    expect(myBasket.items.length).toEqual(1)
  })

  it("adding items to full basket capacity", () => {
    const myBasket = new Basket(2)
    const item = new Item("ITM1", "first", 1.23)
    const item2 = new Item("ITM2", "second", 2.34)
    myBasket.addItem(item)
    myBasket.addItem(item2)
    expect(myBasket.isFull()).toBeTrue()
    expect(myBasket.items.length).toEqual(2)
  })
})