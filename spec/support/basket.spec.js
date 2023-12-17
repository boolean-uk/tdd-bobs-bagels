const { ShoppingBasket } = require('../../src/basket')

describe('ShoppingBasket', () => {
  let basket
  const items = [
    { sku: 'BGLO', price: '0.49', name: 'Bagel', variant: 'Onion' },
    { sku: 'BGLP', price: '0.39', name: 'Bagel', variant: 'Plain' },
    { sku: 'BGLE', price: '0.49', name: 'Bagel', variant: 'Everything' },
    { sku: 'BGLS', price: '0.49', name: 'Bagel', variant: 'Sesame' },
    { sku: 'COF', price: '0.39', name: 'Coffee', variant: '' },
    {
      sku: 'BGSE',
      price: '2.99',
      name: 'Bagel Sandwich',
      variant: 'Everything'
    },
    { sku: 'BGSS', price: '4.99', name: 'Bagel', variant: 'Sesame' }
  ]
  beforeEach(() => {
    basket = new ShoppingBasket()
  })
  items.forEach((item, index) => {
    describe(`Item ${index + 1}`, () => {
      it('adds and removes an item from the basket', () => {
        basket.addItem(item)
        expect(basket.containsItem(item)).toBeTruthy()
        basket.removeItem(item)
        expect(basket.containsItem(item)).toBeFalsy()
      })
    })
  })
  it('should add items within capacity', () => {
    for (let i = 0; i < basket.capacity; i++) {
      basket.addItem(items[0])
    }
    expect(basket.getItemsCount()).toBe(basket.capacity)
  })
})
