const Bagel = require('../src/Bagel.js')

describe ('Bagel', () => {
  it ('adds a bagel and returns the basket with that bagel', () => {
    // setup
    const bagel = new Bagel()
    const expected = ['poppy']

    // execute
    const result = bagel.addToBasket('poppy')
    // verify
    expect(result).toEqual(expected)
  })

  it ('adds another bagel and returns the basket with multiple bagels', () => {
    // setup
    const bagel = new Bagel()
    bagel.addToBasket('poppy')
    const expected = ['poppy', 'sesame']

    // execute
    const result = bagel.addToBasket('sesame')
    // verify
    expect(result).toEqual(expected)
  })

  it ('adds a bagel, then removes, and returns an empty basket', () => {
    // setup
    const bagel = new Bagel()
    bagel.addToBasket('poppy')
    bagel.removeFromBasket('poppy')

    const expected = []
    // execute
    const result = bagel.removeFromBasket('poppy')
    // verify
    expect(result).toEqual(expected)
  })

  it ('remove a specific bagel and returns the basket without that bagel', () => {
    // setup
    const bagel = new Bagel()
    bagel.addToBasket('poppy')
    bagel.addToBasket('sesame')
    bagel.addToBasket('plain')
    bagel.addToBasket('cheese')

    const expected = ['poppy', 'sesame', 'cheese']
    // execute
    const result = bagel.removeFromBasket('plain')
    // verify
    expect(result).toEqual(expected)
  })
})
