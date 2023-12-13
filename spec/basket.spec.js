const Basket = require('../src/basket.js')

describe('Bobs bagels basket methods', () => {
  describe('adding basket items', () => {
    it('adding a valid sku', () => {
      const newItem = Basket.addItem('BGLO')
      expect(newItem).toEqual('Bagel')
    })
  })
})
