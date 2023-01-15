const Basket = require('../src/basket.js')
const Item = require('../src/item.js')
const getBagelBySku = require('./getBagelBySku').getBagelBySku

describe('Basket', () => {
  let basket
  beforeEach(() => {
    basket = new Basket()
  })

  it('should add a bagel/item to the basket if it doesnt exist', () => {
    const expected = new Item(1, 1, getBagelBySku('BGLO'))

    const result = basket.addBagel('BGLO')

    expect(result).toEqual(expected)
  })

  it('should return an error when the basket is full and user tries adding more', () => {
    const basketContents = ['BGLO', 'BGLP', 'BGLE']
    basketContents.forEach((bagel) => basket.addBagel(bagel))

    const result = basket.addBagel('BGSS')

    expect(result).toEqual('Your basket is full')
  })

  it('should allow the user to change the basket limit to a given number', () => {
    const basketContents = ['BGLO', 'BGLP', 'BGLE']
    const expected = new Item(4, 1, getBagelBySku('BGSE'))
    basketContents.forEach((bagel) => basket.addBagel(bagel))

    basket.basketSize = 4

    const result = basket.addBagel('BGSE')

    expect(result).toEqual(expected)
  })

  it('should increase the quantity of a bagel if found', () => {
    const expected = new Item(1, 2, getBagelBySku('BGSS'))
    basket.addBagel('BGSS')
    basket.addBagel('BGSS')

    const result = basket.getItemsInBasket()[0]

    expect(result).toEqual(expected)
  })
})
