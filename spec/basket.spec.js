const BasketList = require('../src/basket.js')

describe('basketList', () => {
  it('Add a new item1', () => {
    const input = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion'
    }
    const basket = new BasketList()
    const result = basket.addToBasket(input)
    expect(result).toEqual(true)
  })
  it('Remove item', () => {
    const input = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion'
    }
    const basket = new BasketList()
    const result = basket.RemoveFromBasket(input)
    expect(result).toEqual(true)
  })
  it('Full cart', () => {
    const maxCapacity = 3
    const input = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion'
    }
    const basket = new BasketList()
    const result = basket.isBasketFull(maxCapacity, input)
    expect(result).toEqual(true)
  })
})
