const { Basket } = require('../../src/basket.js')

describe('basket tests', () => {
  let basket
  beforeEach(() => {
    basket = new Basket(10)
  })

  it('bagel added to array', () => {
    expect(basket.add('BGLP')).toEqual([
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain',
        quantity: 1
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
    expect(basket.remove('NONEXISTING')).toEqual('item doesnt exist in basket')
  })
  it('capacity changed', () => {
    expect(basket.changeCapacity(15)).toEqual(basket.capacity)
  })
  it('capacity changed', () => {
    basket.add('BGLP')
    basket.add('BGLP')
    expect(basket.changeCapacity(1)).toEqual('cannot change capacity')
  })
})
