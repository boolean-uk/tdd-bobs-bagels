const inventory = require('../../src/inventory')
const Basket = require('../../src/basket')

describe('basket', () => {
  it('should add an item to basket', () => {
    const expectedItem = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion'
    }
    const basket = new Basket()
    const uniqueCode = 'BGLO'
    const result = basket.addToBasket(uniqueCode)
    expect(result).toEqual(expectedItem)
  })
  it('should remove item from basket', () => {
    const startData = [
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
      }
    ]
    const expectedResult = [
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      }
    ]
    const basket = new Basket(startData)
    const uniqueCode = 'BGLO'
    const result = basket.removeFromBasket(uniqueCode)
    expect(result).toEqual(expectedResult)
  })
  it()
})