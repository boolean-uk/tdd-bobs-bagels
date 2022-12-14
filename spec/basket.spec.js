const Basket = require('../src/basket.js')

describe('Basket:', () => {
  let basket
  beforeEach(() => {
    basket = new Basket()
  })

  it('a bagel/item can be added to the basket', () => {
    const expected = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion'
    }

    const result = basket.addBagel('BGLO')

    expected(result).toEqual(expected)
  })
})
