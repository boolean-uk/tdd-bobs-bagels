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
})