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

describe('addItem', () => {
  const basket = new Basket(3)
  it('should add 2 items to the basket', () => {
    basket.addItem('BG')
    basket.addItem('BH')
    expect(basket.items.length).toEqual(2)
  })
})

describe('addItem', () => {
  const basket = new Basket(0)
  it('shouldnot add any item to the basket', () => {
    const item = basket.addItem('BG')
    expect(basket.items.length).toEqual(0)
    expect(item).toEqual('You can not add an item')
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
