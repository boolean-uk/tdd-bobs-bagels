const { Basket } = require('../../src/basket.js')

describe('basket tests', () => {
  let basket
  beforeEach(() => {
    basket = new Basket()
  })

  it('bagel added to array', () => {
    expect(basket.add('BGLP')).toEqual([
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      }
    ])
  })

  it('bagel not added to array', () => {
    expect(basket.add('NONEXISTING')).toEqual([])
  })

  it('bagel removed from array', () => {
    basket.add('BGLP')
    expect(basket.remove('BGLP')).toEqual([])
  })
  it('bagel not existing', () => {
    expect(basket.remove('NONEXISTING')).toEqual('bagel doesnt exist in basket')
  })
})
