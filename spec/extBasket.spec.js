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
  it('if there is a BGLP discount, apply it to the price', () => {
    testBasketTwo.addManyBagels('BGLP', 12)
    expect(testBasketTwo.getTotal()).toEqual('total: 3.99')
  })
  it('if there is a BGLE discount, apply it to the price', () => {
    testBasketTwo.addManyBagels('BGLE', 6)
    expect(testBasketTwo.getTotal()).toEqual('total: 2.49')
  })
    it('if there is a COF discount, apply it to the price', () => {
    testBasketTwo.addManyBagels('BGLP', 1)
    testBasketTwo.addManyBagels('COF', 1)
    expect(testBasketTwo.getTotal()).toEqual('total: 1.25')
  })
})
