const Basket = require('../src/basket.js')

describe('Basket:', () => {
  let basket
  beforeEach(() => {
    basket = new Basket()
  })

  it('should add a bagel/item to the basket', () => {
    const expected = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion'
    }

    const result = basket.addBagel('BGLO')

    expect(result).toEqual([expected])
  })

  it('should return an error when the basket is full and user tries adding more', () => {
    const expected = [
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      },
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      },
      {
        sku: 'BGLS',
        price: '0.49',
        name: 'Bagel',
        variant: 'Sesame'
      },
      {
        sku: 'COF',
        price: '0.99',
        name: 'Bagel',
        variant: ''
      },
      {
        sku: 'BGSE',
        price: '2.99',
        name: 'Bagel Sandwich',
        variant: 'Everything',
        fillings: ['Bacon', 'Egg', 'Cheese']
      },
      {
        sku: 'BGSS',
        price: '4.99',
        name: 'Bagel Sandwich',
        variant: 'Sesame',
        fillings: ['Cream Cheese', 'Smoked Salmon']
      }
    ]

    const expectedError = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion'
    }

    const result = basket.addBagel(expectedError)

    expect(result).toThrowError('Your basket is full')
  })
})
