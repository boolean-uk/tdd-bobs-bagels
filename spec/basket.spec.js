const BasketList = require('../src/basket.js')

describe('basketList', () => {
  it('add a new item1', () => {
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
})
