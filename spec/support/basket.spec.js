import Basket from "../../src/basket.js"

describe("basket", () => {
  it("upon creation basket is empty", () => {
    const myBasket = new Basket(3)
    expect(myBasket.capacity).toEqual(3)
    expect(myBasket.isFull()).toBeFalse()
    expect(myBasket.items).toEqual([])
  })
})