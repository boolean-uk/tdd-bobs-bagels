const Basket = require('../src/basket')
describe('addItem', () => {
  const basket = new Basket(2)
  it('should add item to the basket', () => {
    const item = basket.addItem('BG')
    expect(item).toEqual([
      {
        name: 'BG',
        quantity: 1
      }
    ])
  })
})

describe('removeItem', () => {
  const basket = new Basket(2)
  it('should remove item from the basket', () => {
    basket.addItem('BG')
    const result = basket.removeItem('BG')
    expect(result).toEqual([])
  })
})
