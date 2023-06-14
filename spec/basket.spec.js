const Basket = require('../src/basket')

describe('Create the basket', () => {
  let testBasket
  beforeEach(() => {
    testBasket = new Basket()
  })

  it('add the new bagel', () => {
    expect(testBasket.addBagel('Sprinkle')).toEqual([{ type: 'Sprinkle' }])
  })

  it('bagel type has not been added', () => {
    expect(testBasket.addBagel('')).toEqual([])
  })

  it('remove bagel from basket', ()=> {
    testBasket.addBagel('Sprinkle')
    expect(testBasket.removeBagel('Sprinkle')).toEqual([])
  })
  it('remove bagel from basket with more', ()=> {
    testBasket.addBagel('Sprinkle')
    testBasket.addBagel('Cream Cheese')
    expect(testBasket.removeBagel('Sprinkle')).toEqual([{ type: 'Cream Cheese' }])
  })
  it('remove bagel type is not in the cart', () => {
    testBasket.addBagel('Sprinkle')
    testBasket.addBagel('Cream Cheese')
    expect(testBasket.removeBagel('Ham')).toEqual([{ type: 'Sprinkle' },{ type: 'Cream Cheese' }])
  })
})
