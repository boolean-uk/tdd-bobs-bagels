const BasketManager = require('../src/basket.js')

describe('BasketManager', () => {
  let basketManager

  beforeEach(() => {
    basketManager = new BasketManager()
  })
  it('should exist', () => {
    expect(basketManager).toBeInstanceOf(BasketManager)
  })

})