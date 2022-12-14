const { Basket } = require('../src/basket')
// BGLO BGLP BGLE COF
describe('Basket Class', () => {
  let BasketClass
  beforeEach(() => {
    BasketClass = new Basket(10)
  })

  // isBasketFull
  it('expects true if basket is full', () => {
    BasketClass.basketSize = 3
    BasketClass.addBagel('BGSE')
    BasketClass.addBagel('BGLO')
    BasketClass.addBagel('BGLE')
    expect(BasketClass.addBagel('COF')).toBeFalse()
  })

  // isInInventory
  it('expects sku to be a string', () => {
    expect(BasketClass.isInInventory(92)).toBeFalse()
    expect(BasketClass.isInInventory(null)).toBeFalse()
  })

  // isInBasket
  it('expects sku to be a string', () => {
    expect(BasketClass.isInBasket(92)).toBeFalse()
    expect(BasketClass.isInBasket(null)).toBeFalse()
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

  // removeBagel
  it('expects return of false if sku does not exist in basket', () => {
    BasketClass.addBagel('BGLP')
    expect(BasketClass.removeBagel('POTATO')).toBeFalse()
  })
  it('expects the item removed to be returned', () => {
    BasketClass.addBagel('BGLP')
    BasketClass.addBagel('COF')
    expect(BasketClass.removeBagel('BGLP').sku).toBe('BGLP')
  })
})
