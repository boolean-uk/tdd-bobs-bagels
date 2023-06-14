import { basket, addToBasket } from "../src/basket.js";

describe("add to basket", () => {
  it('adds the given item to the basket if not already in the basket', () => {
    //GIVEN
    let itemSKU
    const item = {}

    //WHEN
    const res = addToBasket(itemSKU)

    //THEN
    expect(res).toEqual(basket[item])

  })
})