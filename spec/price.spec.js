const Price = require('../src/price.js')

describe ('price', () => {
/* --- PART 3 - 1 --- */
it ('returns bagel: poppy, price: $4', () => {
    // setup
    const price = new Price()
    const expected = 'bagel: poppy, price: $4'
    // execute
    const result = price.checkPrice('poppy')
    // verify
    expect(result).toEqual(expected)
  })

it ('returns bagel: cheese, price: $3', () => {
    // setup
    const price = new Price()

    const expected = 'bagel: cheese, price: $3'
    // execute
    const result = price.checkPrice('cheese')
    // verify
    expect(result).toEqual(expected)
  })

  /* --- PART 3 - 3 --- */
  it("returns total: $6", () => {
    // setup
    const price = new Price()
    const basket = ['plain', 'poppy']

    const expected = 'total: $6'
    // execute
    const result = price.totalPrice(basket)
    // verify
    expect(result).toEqual(expected)
  })

  it('returns total: $13', () => {
    // setup
    const price = new Price()
    const basket = ['plain', 'plain', 'cheese', 'cheese', 'cinnamon']

    const expected = 'total: $13'
    // execute
    const result = price.totalPrice(basket)
    // verify
    expect(result).toEqual(expected)
  })

  /* --- Extension 1 --- */
  it ('returns an object of price name and its quantity', () => {
    // setup
    const price = new Price()
    const basket = ['BGLO', 'BGLO', 'BGLO', 'BGLO', 'BGLO', 'BGLO']

    const expected = { BGLO: 6 }
    // execute
    const result = price.skuQuantity(basket)
    // verify
    expect(result).toEqual(expected)
  })

  it ('returns an object of price name and its quantity', () => {
    // setup
    const price = new Price()
    const basket = ['BGLO', 'BGLE', 'BGLE', 'BGLP', 'COF']

    const expected = { BGLO: 1, BGLE: 2, BGLP: 1, COF: 1 }
    // execute
    const result = price.skuQuantity(basket)
    // verify
    expect(result).toEqual(expected)
  })

  it ('returns an object of sub total price of each items', () => {
    // setup
    const price = new Price()
    const basket = ['BGLO', 'BGLE', 'BGLE', 'BGLP']
    const skuQuantityObj = price.skuQuantity(basket)

    const expected = { BGLO: 0.49, BGLE: 0.98, BGLP: 0.39 }
    // execute
    const result = price.subPrice(skuQuantityObj)
    // verify
    expect(result).toEqual(expected)
  })

  it ('returns the total price', () => {
    // setup
    const price = new Price()
    const basket = ['BGLO', 'BGLE', 'BGLE', 'BGLP']
    const skuQuantityObj = price.skuQuantity(basket)
    const subPrice = price.subPrice(skuQuantityObj)

    const expected = 1.86
    // execute
    const result = price.totalPrice(subPrice)
    // verify
    expect(result).toEqual(expected)
  })
})
