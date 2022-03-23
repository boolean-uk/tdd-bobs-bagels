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
})
