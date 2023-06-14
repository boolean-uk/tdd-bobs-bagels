import { basket } from "../src/basket.js";

describe("add to basket", () => {
  it('adds the given item to the basket if not already in the basket', () => {
    //GIVEN
    const item = {
      name: String,
      price: Number,
      quantity: Number,
    }

    //WHEN
    const res = addToBasket(item)

    //THEN
    expect(res).toEqual(basket[item])

  })
})