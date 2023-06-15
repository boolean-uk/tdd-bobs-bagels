const { Basket, BigBasket } = require('../src/basket')

describe('discounts', () => {
  let testBasketTwo
  beforeEach(() => {
    testBasketTwo = new BigBasket()
  })

  it('if there is a BGLO discount, apply it to the price', () => {
    testBasketTwo.addManyBagels('BGLO', 6)
    expect(testBasketTwo.getTotal()).toEqual('total: 2.49')
  })
})
