
const BasketManager = require('../src/basket.js')

describe('BasketManager', () => {
  let basketManager

  beforeEach(() => {
    basketManager = new BasketManager()
  })
  it('should exist', () => {
    expect(basketManager).toBeInstanceOf(BasketManager)
  })

  it('should have empty items ', () => {
    expect(basketManager.items).toEqual([])
  })

  it('should be basicCap equal 5', () => {
    expect(basketManager.basicCap).toBe(5)
  })

  it('add bagel to basket', () => {
    const result = basketManager.add('honey')
    expect(result).toBe('We dont have that bagel')

    basketManager.add('Chocolate')
    expect(basketManager.items.length).toBe(1)
  })
})
