const Basket = require('../src/basket.js')

describe('Bobs bagels basket methods', () => {
  describe('/ adding basket items', () => {
    it(' /adding a valid sku', () => {
      const basket = new Basket()
      const newItem = basket.addItem('BGLO')
      expect(newItem).toEqual('Bagel')
    })
  })
})
