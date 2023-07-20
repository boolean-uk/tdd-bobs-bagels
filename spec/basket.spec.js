const Basket = require('../src/basket')
describe('addItem', () => {
  const basket = new Basket(2)
  it('should add item to the basket', () => {
    const item = basket.addItem('BGLO')
    expect(item).toEqual([
      {
        name: 'BGLO',
        quantity: 1
      }
    ])
  })
})

describe('addItem', () => {
  const basket = new Basket(3)
  it('should add 2 items to the basket', () => {
    basket.addItem('BGLO')
    basket.addItem('BGLP')
    expect(basket.items.length).toEqual(2)
  })
})

describe('addItem', () => {
  const basket = new Basket(0)
  it('shouldnot add any item to the basket', () => {
    const item = basket.addItem('BGLO')
    expect(basket.items.length).toEqual(0)
    expect(item).toEqual('You can not add an item')
  })
})

describe('removeItem', () => {
  const basket = new Basket(2)
  it('should remove item from the basket', () => {
    basket.addItem('BGLO')
    const result = basket.removeItem('BGLO')
    expect(result).toEqual([])
  })
})

describe('removeItem', () => {
  const basket = new Basket(2)
  it('shouldnot remove item from the basket', () => {
    basket.addItem('BGLO')
    const result = basket.removeItem('GH')
    expect(result).toEqual('Item does not exist')
  })
})

describe('checkPrice', () => {
  const basket = new Basket(2)
  it('should return price', () => {
    const result = basket.checkPrice('BGLO')
    expect(result).toEqual('0.49')
  })
})
