const Basket = require('../src/basket.js')

describe('Bobs bagels basket methods', () => {
  describe('/ adding basket items', () => {
    const basket = new Basket()
    beforeEach(() => {
      basket.basketList = []
    })
    it(' /adding a valid sku', () => {
      const newItem = basket.addItem('BGLO')
      expect(newItem).toEqual('Bagel')
    })
    it('/if sku is invalid', () => {
      const newItem = basket.addItem('XXXX')
      expect(newItem).toEqual('item not found')
    })
  })
})
