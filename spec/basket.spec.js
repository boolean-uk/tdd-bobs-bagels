import Basket from "../src/basket.js";

describe("add to basket", () => {
  let basket
  beforeEach(() => { basket = new Basket })

  it('adds the given item to the basket if not already in the basket', () => {
    //GIVEN
    const item = {
      "sku": "BGLO",
      "price": "0.49",
      "name": "Bagel",
      "variant": "Onion",
      "quantity": 1
    }

    //WHEN
    const res = basket.addToBasket('BGLO')

    //THEN
    expect(res).toEqual(item)
    expect(basket.items.length).toEqual(1)

  })

  it('adds a different given item to the basket if not already in the basket', () => {
    //GIVEN
    const item = {
      "sku": "BGLP",
      "price": "0.39",
      "name": "Bagel",
      "variant": "Plain",
      "quantity": 1
    }

    //WHEN
    const res = basket.addToBasket('BGLP')

    //THEN
    expect(res).toEqual(item)
    expect(basket.items.length).toEqual(1)

  })

  it('does not add to basket if the given sku does not match an inventory item', () => {
    //GIVEN

    //WHEN
    const res = basket.addToBasket('HWLD')

    //THEN
    expect(res).toEqual(undefined)
    expect(basket.items.length).toEqual(0)

  })

it('should be able to remove items from basket', () => {
  //GIVEN
  const basket = new Basket()
  const item = {
    "sku": "BGLO",
    "price": "0.49",
    "name": "Bagel",
    "variant": "Onion",
    "quantity": 1
  }
//WHEN
basket.addToBasket(item) 
const newRes = basket.removeFromBasket('BGLO')
const expectRes = undefined
//THEN
expect(newRes).toEqual(expectRes)
})

})