const BagelBasket = require('../src/basket.js')

describe('BagelBasket', () => {
  let basket
  const bagels = [
    { sku: 'BGLO', price: '0.49', name: 'Bagel', variant: 'Onion' },
    { sku: 'BGLP', price: '0.39', name: 'Bagel', variant: 'Plain' },
    { sku: 'BGLE', price: '0.49', name: 'Bagel', variant: 'Everything' },
    { sku: 'BGLS', price: '0.49', name: 'Bagel', variant: 'Sesame' },
    { sku: 'COF', price: '0.39', name: 'Coffee', variant: '' },
    { sku: 'BGSE', price: '2.99', name: 'Bagel Sandwich', variant: 'Everything'},
    { sku: 'BGSS', price: '4.99', name: 'Bagel', variant: 'Sesame' }
  ]

  beforeEach(() => {
    basket = new BagelBasket()
  })

  bagels.forEach((bagel, index) => {
    describe(`Bagel ${index + 1}`, () => {
      it('adds and removes an item from the basket', () => {
        basket.addItem(bagel)
        expect(basket.items).toContain(bagel)
        basket.removeItem(bagel)
        expect(basket.items).not.toContain(bagel)
      })
    })
  })

  // Basket too full section
  it('stops the basket from overfilling', () => {
    
  })
})

module.exports = BagelBasket
