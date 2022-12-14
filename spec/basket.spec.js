const { Basket } = require('../src/basket')
// BGLO BGLP BGLE COF
describe('Basket Class', () => {
  let BasketClass
  beforeEach(() => {
    BasketClass = new Basket()
  })

  // addBagel
  it('expects sku to be a string', () => {
    expect(BasketClass.addBagel(92)).toBeFalse()
    expect(BasketClass.addBagel(null)).toBeFalse()
  })
  it('expects basket var to have new added bagel', () => {
    BasketClass.addBagel('BGSE')
    expect(BasketClass.basket).toHaveSize(1)
  })
  it('expects addBagel to return false when sku not found', () => {
    expect(BasketClass.addBagel('POTATO')).toBeFalse()
  })
  it('expects addBagel to sum repeated sku', () => {
    BasketClass.addBagel('BGLP')
    BasketClass.addBagel('COF')
    BasketClass.addBagel('COF') // Must increase quantity only
    expect(BasketClass.basket).toHaveSize(2)
  })
})
