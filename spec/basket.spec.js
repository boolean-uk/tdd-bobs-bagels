const { add, remove } = require('../src/basket')

describe('Basket', () => {
  it('adding type of bagel existing in inventory should return true', () => {
    const result = add('BGLO', 1)

    expect(result).toEqual(true)
  })

  it('adding more bagels than capacity should return false', () => {
    const result = add('BGLO', 100)

    expect(result).toEqual(false)
  })

  it('adding type of bagel not existing in inventory should return false', () => {
    const result = add('BOAFF', 1)

    expect(result).toEqual(false)
  })

  it('removing bagels existing in basket should return true', () => {
    add('BGLO', 5)
    const result = remove('BGLO', 4)

    expect(result).toEqual(true)
  })

  it('removing bagels not existing in basket should return false', () => {
    add('BGLO', 5)
    const result = remove('BGLE', 4)

    expect(result).toEqual(false)
  })
})
