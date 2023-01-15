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

  it('should show a list of all items in the basket - empty basket', () => {
    const expected = 0
    const result = basket.getItemsInBasket()

    expect(result.length).toEqual(expected)
  })

  it('should show a list of all items in the basket - multiple items in basket', () => {
    const expected = ['BGLO', 'BGLP', 'BGLE']
    expected.forEach((bagel) => basket.addBagel(bagel))
    const result = basket.getItemsInBasket()

    expect(result.length).toEqual(expected.length)
  })

  it('should remove an item from the basket', () => {
    const basketContents = ['BGLO', 'BGLP', 'BGLE']
    basketContents.forEach((bagel) => basket.addBagel(bagel))

    const expected = new Item(3, 1, getBagelBySku('BGLE'))
    const result = basket.removeBagel('BGLE')

    expect(result).toEqual(expected)
  })

  it('should give an error when trying to remove item from empty basket', () => {
    const expected = 'Item not found'
    const result = basket.removeBagel(3)

    expect(result).toEqual(expected)
  })

  it('should return an error when getting an undefined price', () => {
    const expected = 'Bagel not found'
    const result = basket.getPriceBySku('Not an item sku')

    expect(result).toEqual(expected)
  })

  it('should get a bagel price by sku', () => {
    const expected = '2.99'
    const result = basket.getPriceBySku('BGSE')

    expect(result).toEqual(expected)
  })

  it('should get total of items in basket', () => {
    const expected = 3.48
    basket.addBagel('BGSE')
    basket.addBagel('BGLS')

    const result = basket.getTotal()

    expect(result).toEqual(expected)
  })
})
