import Basket from '../src/basket.js'

describe('Basket', () => {
  // to be more descriptive, add another describe (useful when working with more than one class)
  describe('addItem', () => {
    it('add item to basket', () => {
      // SET UP
      const newBasket = new Basket()
      const expected = [
        { sku: 'BGLE', price: '0.49', name: 'Bagel', variant: 'Everything' }
      ]

      // EXECUTE

      const result = newBasket.addItem('BGLE')
      // VERIFY
      expect(result).toEqual(expected)
    })
  })
  describe('removeItem', () => {
    it('remove item from basket', () => {
      // SET UP
      const newBasket = new Basket()
      newBasket.addItem('BGLE')
      const expected = []
      // EXECUTE
      const result = newBasket.removeItem('BGLE')
      // VERIFY
      expect(result).toEqual(expected)
    })
  })
  describe('addItem, capacity reached', () => {
    fit('basket has reached maximum capacity', () => {
      // SETUP
      const newBasket = new Basket()
      newBasket.addItem('BGLE')
      const expected = 'basket full'

      // EXECUTE
      const result = newBasket.addItem('BGLE')

      // VERIFY
      expect(result).toEqual(expected)
    })
  })
})
