const Item = require('../src/item.js')

describe ('price', () => {
/* --- PART 3 - 1 --- */
it ('returns bagel: poppy, price: $4', () => {
    // setup
    const item = new Item()
    const expected = 'bagel: poppy, price: $4'
    // execute
    const result = item.checkPrice('poppy')
    // verify
    expect(result).toEqual(expected)
  })

it ('returns bagel: cheese, price: $3', () => {
    // setup
    const item = new Item()

    const expected = 'bagel: cheese, price: $3'
    // execute
    const result = item.checkPrice('cheese')
    // verify
    expect(result).toEqual(expected)
  })

  /* --- Extension 1 --- */
  it ('returns a array within array of item name and its quantity', () => {
    // setup
    const item = new Item()
    const basket = ['BGLO', 'BGLO', 'BGLO', 'BGLO', 'BGLO', 'BGLO']

    const expected = [['BGLO', 6]]
    // execute
    const result = item.skuQuantity(basket)
    // verify
    expect(result).toEqual(expected)
  })

  fit ('returns a array within array of item name and its quantity', () => {
    // setup
    const item = new Item()
    const basket = ['BGLO', 'BGLE', 'BGLE', 'BGLP', 'COF']

    const expected = [['BGLO', 1], ['BGLE', 2], ['BGLP', 1], ['COF', 1]]
    // execute
    const result = item.skuQuantity(basket)
    // verify
    expect(result).toEqual(expected)
  })
})
