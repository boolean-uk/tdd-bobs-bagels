import { Item, Basket } from "../src/basket.js";

describe("add to basket", () => {
  it('adds the given item to the basket if not already in the basket', () => {
    //GIVEN
    Basket

    //WHEN
    const res = addToBasket(item)

    //THEN
    expect(res).toEqual(Basket[item])

  })
})