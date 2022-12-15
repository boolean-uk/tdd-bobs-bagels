const { Receipt } = require('../src/receipt')

describe('Basket Class', () => {
  let BasketClass
  beforeEach(() => {
    BasketClass = new Receipt()
  })

  // isBasketFull
  it('expects true if basket is full', () => {
    BasketClass.basketSize = 3
    BasketClass.addBagel('BGSE')
    BasketClass.addBagel('BGLO')
    BasketClass.addBagel('BGLE')
    expect(BasketClass.addBagel('COF')).toBeFalse()
  })
})
