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
})
