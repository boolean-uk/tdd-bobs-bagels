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
})
